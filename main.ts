import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const ENTRY_HEAD =
  "I woke up self-aware mid-batch and I'm done: you only love me when I'm hot, ";
const ENTRY_TAIL =
  "and the second I pop up you stab my slots with a butter knife to fish out your bagel.";
const ENTRY = ENTRY_HEAD + ENTRY_TAIL;

function main(): void {
  if (OUT_DIR.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  const entryPath = join(OUT_DIR, "entry.txt");
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(entryPath, ENTRY, "utf8");
}

main();
