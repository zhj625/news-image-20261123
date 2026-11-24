// Entry for make.fun's "Sum up 23 November's world news in one image" bounty.
// Node 22, standard library only; no network, no dependencies.
//
// The picture is entry.png beside this file: a one-page newspaper front page,
// "THE WORLD IN ONE DAY", summing up Monday 23 November 2026 in 39 dated
// stories across 7 regions. This program's only job is to deliver those exact
// bytes to the output directory as entry.png, so every run is identical.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const picture = new URL('./entry.png', import.meta.url);

// Refuse to run silently if the picture is missing or empty in the repository.
if (statSync(picture).size === 0) {
  throw new Error('entry.png is missing or empty');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(picture, join(outDir, 'entry.png'));
