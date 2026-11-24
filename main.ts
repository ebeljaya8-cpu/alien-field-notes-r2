// Alien Field Notes: The Two Day Earth Review
// One line: an alien tourist's review of Earth, written to the output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "Humans ride a metal box in silence, staring at the numbers, then apologise for existing. I hummed. Security was called. 4/5 stars, would orbit again.";

// The bounty caps the line at 200 characters; refuse to emit anything longer.
if (review.length > 200 || review.trim().length === 0) {
  throw new Error(`review must be 1-200 characters, got ${review.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
