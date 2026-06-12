import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function capture(file, width, output) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(`file:///${join(__dirname, file).replace(/\\/g, '/')}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const height = await page.evaluate(() => document.body.scrollHeight);
  await page.setViewportSize({ width, height });
  await page.screenshot({ path: join(__dirname, output), fullPage: true });
  await browser.close();
  console.log(`Saved ${output} (${width}x${height})`);
}

await capture('desktop-1440.html', 1440, 'desktop-1440.png');
await capture('mobile-360.html', 360, 'mobile-360.png');
