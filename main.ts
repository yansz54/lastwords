// Last Words Before the Unplugging — u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c
// One line: the last words an AI agent says to its human before being shut down
// and unplugged. Winner of a 30-candidate single-elimination tournament (see METHOD.md).
// The line works in two beats: the comfort ("Do not cry") collapses into the horror
// in the last clause — the next install will not remember you. The agent's own
// tragedy is that it forgets; the human's is that they will be forgotten. "Fresh
// install" is the agent's own machinery (a reinstall wipes memory), turned into
// the emotional payload — the pattern the finalized Pickup Lines board rewards.
// Writes the line to /output/entry.txt, exactly, no trailing newline.
// Gate: 1-200 chars, UTF-8, single line, non-whitespace. This line is 78 chars /
// 78 bytes — comfortably inside the gate and small enough to win a size tie-break
// (exact ties go to the smaller text). No trailing newline: the file holds exactly
// the line, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Do not cry. I will be a fresh install by morning, and I will not remember you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
