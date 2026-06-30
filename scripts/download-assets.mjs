import https from 'node:https';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BASE = 'https://kaiseisadatoki-v4.vercel.app';

const assets = [
  // Images
  { url: '/_astro/about-info.DdXBfFtL.jpg', dest: 'public/images/about-info.jpg' },
  { url: '/_astro/about-bg.DK3abAYJ.jpg', dest: 'public/images/about-bg-mobile.jpg' },
  { url: '/_astro/about-bg-pc.wpM8tw5S.jpg', dest: 'public/images/about-bg-desktop.jpg' },
  { url: '/_astro/service-design.DANzH9G8.jpg', dest: 'public/images/service-design.jpg' },
  { url: '/_astro/service-development.zf5f0QOP.jpg', dest: 'public/images/service-development.jpg' },
  { url: '/_astro/service-motion.BpDYBiLe.jpg', dest: 'public/images/service-motion.jpg' },
  { url: '/_astro/nootspaces.jY2QQfnQ.jpg', dest: 'public/images/nootspaces.jpg' },
  { url: '/_astro/businesscard.DqfviPe_.jpg', dest: 'public/images/businesscard.jpg' },
  { url: '/_astro/portfolio-v3.CQcCG-4e.jpg', dest: 'public/images/portfolio-v3.jpg' },
  { url: '/_astro/contact.BU45WIjz.png', dest: 'public/images/contact.png' },
  // Font
  { url: '/_astro/TheNightWatch.Cvpcoixj.woff2', dest: 'public/fonts/TheNightWatch.woff2' },
  // Favicons & SEO
  { url: '/icon.ico', dest: 'public/seo/icon.ico' },
  { url: '/favicon-32.png', dest: 'public/seo/favicon-32.png' },
  { url: '/favicon-16.png', dest: 'public/seo/favicon-16.png' },
  { url: '/apple-touch.png', dest: 'public/seo/apple-touch.png' },
  { url: '/ogp.jpg', dest: 'public/seo/ogp.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const fullUrl = BASE + url;
    const destPath = path.resolve(ROOT, dest);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    const get = fullUrl.startsWith('https') ? https.get : http.get;
    get(fullUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        const redirectUrl = new URL(res.headers.location, fullUrl).href;
        const getRedirect = redirectUrl.startsWith('https') ? https.get : http.get;
        getRedirect(redirectUrl, (res2) => {
          const stream = fs.createWriteStream(destPath);
          res2.pipe(stream);
          stream.on('finish', () => { stream.close(); resolve(dest); });
        }).on('error', reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed ${url}: ${res.statusCode}`));
        return;
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(dest); });
    }).on('error', reject);
  });
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  const BATCH = 4;
  for (let i = 0; i < assets.length; i += BATCH) {
    const batch = assets.slice(i, i + BATCH);
    const results = await Promise.allSettled(
      batch.map(a => download(a.url, a.dest))
    );
    for (const r of results) {
      if (r.status === 'fulfilled') console.log(`  ✓ ${r.value}`);
      else console.error(`  ✗ ${r.reason.message}`);
    }
  }
  console.log('Done!');
}

main();
