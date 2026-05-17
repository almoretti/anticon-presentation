// Playwright screenshot script for the Anticon impress.js deck.
//
// Captures slides (driven via impress().goto) and writes a PNG per slide to
// ./screenshots-<deckname>/. Uses a real transition duration so impress.js
// fires stepenter properly and CSS enter-animations run.
//
// USAGE
//   node capture-deck.js                          # all slides, default deck
//   node capture-deck.js path/to/deck.html        # all slides, specific deck
//   node capture-deck.js --slide 1                # only slide 1
//   node capture-deck.js --slide 1,2,7            # only those slides
//   node capture-deck.js --slide reveal           # only the reveal slide
//   node capture-deck.js path/to/deck.html --slide 1
//
// Slide selectors accept: a number (1, 2, …), a full id (slide-1, slide-reveal),
// or the keyword "reveal". Multiple selectors are comma-separated.
//
// SETUP (once)
//   npm install playwright
//   npx playwright install chromium
//
// NOTES
// - Renders at 1920x1080 (the deck's authored canvas).
// - Image assets referenced in the deck (e.g. ../Assets/*.png) must be reachable
//   from the deck's location; otherwise those images will show alt text in screenshots.
// - The keydown blocker prevents spurious key events from advancing the deck
//   between automation steps.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DEFAULT_DECK = 'anticon-talk-draft-007.html';

function parseArgs(argv) {
  const args = argv.slice(2);
  let deckArg = null;
  let slideSelectors = null;
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--slide' || a === '--slides' || a === '-s') {
      slideSelectors = (args[++i] || '').split(',').map(s => s.trim()).filter(Boolean);
    } else if (a === '--deck' || a === '-d') {
      deckArg = args[++i];
    } else if (!a.startsWith('-') && deckArg === null) {
      deckArg = a;
    }
  }
  return { deckArg, slideSelectors };
}

function resolveSelector(sel, allIds) {
  if (allIds.includes(sel)) return sel;
  if (sel === 'reveal') return 'slide-reveal';
  if (/^\d+$/.test(sel)) {
    const id = 'slide-' + sel;
    if (allIds.includes(id)) return id;
  }
  const idWithPrefix = sel.startsWith('slide-') ? sel : 'slide-' + sel;
  if (allIds.includes(idWithPrefix)) return idWithPrefix;
  return null;
}

(async () => {
  const { deckArg, slideSelectors } = parseArgs(process.argv);
  const deckAbs = deckArg
    ? path.resolve(deckArg)
    : path.join(__dirname, DEFAULT_DECK);

  if (!fs.existsSync(deckAbs)) {
    console.error('Deck not found at', deckAbs);
    process.exit(1);
  }

  const deckUrl = 'file://' + deckAbs.replace(/\\/g, '/');
  const deckName = path.basename(deckAbs, '.html');
  const outDir = path.join(path.dirname(deckAbs), 'screenshots-' + deckName.replace(/^anticon-talk-/, ''));
  fs.mkdirSync(outDir, { recursive: true });

  console.log('Deck:', deckUrl);
  console.log('Out :', outDir);

  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-web-security'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  page.on('console', msg => { if (msg.type() === 'error') console.log('[console error]', msg.text()); });
  page.on('pageerror', err => console.log('[pageerror]', err.message));

  await page.goto(deckUrl, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForFunction(
    () => document.body.classList.contains('impress-enabled') && typeof impress !== 'undefined',
    { timeout: 15000 }
  );
  await page.waitForTimeout(2000);

  // Block all keydown events so nothing advances the deck unexpectedly.
  await page.evaluate(() => {
    const blocker = (e) => { e.stopImmediatePropagation(); e.preventDefault(); };
    window.addEventListener('keydown', blocker, true);
    document.addEventListener('keydown', blocker, true);
  });

  const slideIds = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#impress .step')).map(s => s.id)
  );
  console.log('Found', slideIds.length, 'slides');

  let targetIds = slideIds;
  if (slideSelectors && slideSelectors.length) {
    const resolved = slideSelectors.map(s => resolveSelector(s, slideIds));
    const missing = slideSelectors.filter((_, i) => resolved[i] === null);
    if (missing.length) {
      console.error('Slide selector(s) did not match:', missing.join(', '));
      console.error('Available ids:', slideIds.join(', '));
      process.exit(1);
    }
    targetIds = resolved;
    console.log('Capturing', targetIds.length, 'of', slideIds.length, '->', targetIds.join(', '));
  }

  let idx = 0;
  for (const id of slideIds) {
    const seq = String(idx).padStart(2, '0');
    idx++;
    if (!targetIds.includes(id)) continue;
    // Use a 1.5s transition so impress.js fires stepenter (which triggers the
    // CSS .active enter-animations) properly. The reveal slide overrides
    // duration in its own data-transition-duration; we approximate by adding
    // extra settle time for it.
    const isReveal = id === 'slide-reveal';
    const dur = isReveal ? 4000 : 1500;
    const settle = isReveal ? 4500 : 1700;

    const result = await page.evaluate(async ({ targetId, d, s }) => {
      impress().goto(targetId, d);
      await new Promise(r => setTimeout(r, s));
      return {
        active: document.querySelector('.step.active')?.id,
        meta: document.querySelector('.step.active .meta')?.textContent?.trim()
      };
    }, { targetId: id, d: dur, s: settle });

    await page.waitForTimeout(1500);
    const filePath = path.join(outDir, seq + '-' + id + '.png');
    await page.screenshot({ path: filePath, fullPage: false });
    console.log('[' + seq + '] ' + id + ' -> active=' + result.active + ' meta="' + result.meta + '"');
  }

  await browser.close();
  console.log('Done.');
})().catch(err => { console.error('FATAL:', err); process.exit(1); });
