const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const deck = path.join(__dirname, 'anticon-talk-draft-007.html');
  const url = 'file://' + deck.replace(/\\/g, '/');
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  page.on('console', msg => { if (msg.type() === 'error') console.log('[err]', msg.text()); });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.body.classList.contains('impress-enabled'));
  await page.waitForTimeout(5500);
  await page.screenshot({ path: path.join(__dirname, 'screenshots-draft-007', '00-slide-0.png'), fullPage: false });
  await browser.close();
  console.log('done');
})();
