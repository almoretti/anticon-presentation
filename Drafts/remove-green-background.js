const sharp = require("sharp");

const [, , input, output] = process.argv;

if (!input || !output) {
  console.error("Usage: node remove-green-background.js <input> <output>");
  process.exit(1);
}

async function main() {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const greenDominance = g - Math.max(r, b);
    const distance = Math.hypot(r - 0, g - 255, b - 0);

    let alpha = 255;
    if (greenDominance > 50 && distance < 230) {
      alpha = distance < 78 ? 0 : Math.max(0, Math.min(255, Math.round((distance - 54) * 2.0)));
    }

    if (alpha < 255) {
      const keep = alpha / 255;
      data[i] = Math.round(r * keep + 255 * (1 - keep));
      data[i + 1] = Math.round(Math.min(g, 210) * keep + 255 * (1 - keep));
      data[i + 2] = Math.round(b * keep + 255 * (1 - keep));
      data[i + 3] = alpha;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(output);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
