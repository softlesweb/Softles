// Verifies the project page captures. Run after adding or re-capturing one:
//   node scripts/check-captures.mjs
//
// Three things go wrong with full-page screenshots and none is visible in a
// thumbnail:
//   - the declared dW/dH/mW/mH drift from the file after a re-capture, and the
//     declared height is what sets the device auto-scroll speed;
//   - Chrome silently tiles a screenshot instead of scrolling it once the
//     surface passes ~16384px, so the capture repeats the same block;
//   - a section occasionally fails to paint, leaving a long flat band of
//     background where content should be.
// Data files are read as text rather than imported, for the reason given at the
// top of make-hero-crops.mjs.
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCES = [
  "app/work/projects.js",
  "app/wordpress-development/components/WordPressProjects.jsx",
];
const ENTRY = /\{ label: "([^"]+)", d: "([^"]+)", m: "([^"]+)", dW: (\d+), dH: (\d+), mW: (\d+), mH: (\d+) \}/g;
const ROOT = process.cwd();
const W = 64; // each row is sampled as a 64-wide greyscale signature

function rowDiff(rows, a, b) {
  let s = 0;
  for (let i = 0; i < W; i++) s += Math.abs(rows[a * W + i] - rows[b * W + i]);
  return s / W;
}

// Scores how strongly the image repeats itself. A real page scores well above
// 1; a tiled capture collapses towards 0 at its tile height.
async function repeatScore(file) {
  const meta = await sharp(file, { limitInputPixels: false }).metadata();
  const H = Math.min(2400, Math.round(meta.height / 8));
  const { data } = await sharp(file, { limitInputPixels: false })
    .resize({ width: W, height: H, fit: "fill" })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let best = Infinity;
  let bestPeriod = 0;
  const step = Math.max(1, Math.round(H / 400));
  for (let period = Math.round(H / 8); period <= Math.round(H / 2); period += step) {
    let s = 0;
    let n = 0;
    for (let y = 0; y + period < H; y += 3) { s += rowDiff(data, y, y + period); n++; }
    if (s / n < best) { best = s / n; bestPeriod = period; }
  }
  let base = 0;
  let bn = 0;
  for (let y = 0; y + 7 < H; y += 3) { base += rowDiff(data, y, y + 7); bn++; }
  base /= bn;

  // Longest stretch of rows that are mostly one flat colour. Measured as a run
  // across the row rather than the whole width, so an inset block counts too —
  // an empty carousel or an image that never loaded sits inside the section,
  // not edge to edge. Section padding gives a few hundred px; a section that
  // never painted gives far more, hence both an absolute and a relative bound.
  let longest = 0;
  let run = 0;
  for (let y = 0; y < H; y++) {
    let widest = 0;
    let flat = 1;
    for (let x = 1; x < W; x++) {
      if (Math.abs(data[y * W + x] - data[y * W + x - 1]) <= 3) flat++;
      else { if (flat > widest) widest = flat; flat = 1; }
    }
    if (flat > widest) widest = flat;
    if (widest >= W * 0.7) run++;
    else { if (run > longest) longest = run; run = 0; }
  }
  if (run > longest) longest = run;

  return {
    ratio: best / (base || 1),
    absolute: best,
    tilePx: Math.round((bestPeriod / H) * meta.height),
    blankPx: Math.round((longest / H) * meta.height),
    meta,
  };
}

let problems = 0;
let checked = 0;

for (const source of SOURCES) {
  const text = await readFile(path.join(ROOT, source), "utf8");
  let m;
  while ((m = ENTRY.exec(text))) {
    const [, label, d, mo, dW, dH, mW, mH] = m;
    for (const [rel, w, h] of [[d, +dW, +dH], [mo, +mW, +mH]]) {
      checked++;
      const file = path.join(ROOT, "public", rel);
      let r;
      try {
        r = await repeatScore(file);
      } catch {
        problems++;
        console.log(`MISSING  ${rel}  (${source} · ${label})`);
        continue;
      }
      if (r.meta.width !== w || r.meta.height !== h) {
        problems++;
        console.log(`STALE    ${rel}  declared ${w}x${h}, file is ${r.meta.width}x${r.meta.height}`);
      }
      if (r.ratio < 0.45 && r.absolute < 10) {
        problems++;
        console.log(`TILED    ${rel}  repeats every ~${r.tilePx}px — re-capture by scroll-and-stitch`);
      }
      if (r.blankPx > 600 && r.blankPx > r.meta.height * 0.06) {
        problems++;
        console.log(`BLANK    ${rel}  ${r.blankPx}px of flat background — a section did not paint, re-capture`);
      }
    }
  }
}

console.log(`\n${checked} capture files checked, ${problems} problem${problems === 1 ? "" : "s"}`);
process.exit(problems ? 1 : 0);
