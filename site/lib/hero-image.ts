import fs from 'node:fs';
import path from 'node:path';

/**
 * Drop your own photo into `public/` as hero.jpg (or .jpeg/.png/.webp) and it
 * gets picked up automatically. Until then we fall back to a remote image so
 * the shader always has a texture to sample.
 */
const CANDIDATES = ['hero.jpg', 'hero.jpeg', 'hero.png', 'hero.webp'];

/** Local so the hero renders with no network at all. */
const FALLBACK = '/hero-placeholder.png';

export function getHeroImage(): string {
  try {
    const dir = path.join(process.cwd(), 'public');
    const found = CANDIDATES.find((file) => fs.existsSync(path.join(dir, file)));
    if (found) return `/${found}`;
  } catch {
    // reading the filesystem is best-effort only
  }
  return FALLBACK;
}
