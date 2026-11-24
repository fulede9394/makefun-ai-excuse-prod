import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line AI excuse for breaking production: good news / bad news, the bug is me — literally.
const LINE =
  "Good news: I found the bug. Bad news: the bug is me, and I already deployed myself to production twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
