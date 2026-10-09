// Builds the hero crops the homepage device cycles through: the top slice of
// each project's first page capture, at the device window's 27:16 ratio.
// Run after adding or re-capturing a project: node scripts/make-hero-crops.mjs
//
// projects.js is read as text rather than imported, because importing an ES
// module from a package without "type": "module" makes Node log a reparse
// warning, and adding that field would break the CommonJS config files.
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const RATIO = 27 / 16;
const ROOT = process.cwd();

const source = await readFile(path.join(ROOT, "app", "work", "projects.js"), "utf8");
const firstPages = [...source.matchAll(/pages:\s*\[\s*\{[^}]*?d:\s*"([^"]+)"/g)].map((m) => m[1]);

if (firstPages.length === 0) {
  throw new Error("No project page captures found in app/work/projects.js");
}

for (const page of firstPages) {
  const src = path.join(ROOT, "public", page);
  const name = path.basename(src).replace(/-p0-d\.\w+$/, "");
  const out = path.join(ROOT, "public", "work", `${name}-hero.jpg`);

  const image = sharp(src, { limitInputPixels: false });
  const { width, height } = await image.metadata();
  const cropHeight = Math.min(height, Math.round(width / RATIO));

  await image
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(out);

  console.log(`${name.padEnd(14)} ${width}x${height} -> ${width}x${cropHeight}  ${path.basename(out)}`);
}
