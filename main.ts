// The Meeting That Should Have Been One Line
// make.fun program/v1 entry: writes a single meeting-killing line to entry.txt.
//
// The line is the meeting's own verdict on itself: an hour spent, nothing
// decided, and the only outcome is another meeting about the same thing.
// No setup, no explanation — just the sentence that ends the meeting.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "After an hour, the only decision this meeting made was to schedule " +
  "another meeting to decide what this meeting was for.";

function main(): void {
  // The gate only accepts 1-200 characters of real text, so refuse to
  // write anything outside that window instead of shipping a dead entry.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
