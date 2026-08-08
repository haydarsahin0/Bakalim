// Generates public/hero-placeholder.png so the hero has a texture even before
// you drop in your own photo. Run: node scripts/make-placeholder.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const W = 900;
const H = 1200;

function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}

// gallery-ish placeholder: pale wall, a colourful canvas, a soft figure
const raw = Buffer.alloc((W * 3 + 1) * H);
let o = 0;
for (let y = 0; y < H; y++) {
  raw[o++] = 0; // filter: none
  for (let x = 0; x < W; x++) {
    const u = x / W;
    const v = y / H;

    // wall
    let r = 238 - v * 14;
    let g = 238 - v * 14;
    let b = 235 - v * 12;

    // painting rectangle
    if (u > 0.34 && u < 0.92 && v > 0.14 && v < 0.62) {
      const pu = (u - 0.34) / 0.58;
      const pv = (v - 0.14) / 0.48;
      r = 250 * (1 - pv * 0.5) + 60 * Math.sin(pu * 7);
      g = 190 * (1 - pu * 0.35) + 70 * Math.sin(pv * 5 + 1);
      b = 60 + 190 * Math.sin(pu * 3 + pv * 4);
      if (pu > 0.55 && pv > 0.2) {
        r = 235 + 20 * Math.sin(pv * 9);
        g = 120 + 60 * Math.cos(pu * 6);
        b = 40 + 30 * Math.sin(pu * 8);
      }
    }

    // figure silhouette
    const fx = (u - 0.28) / 0.15;
    const fy = (v - 0.62) / 0.4;
    const head = Math.hypot((u - 0.28) / 0.055, (v - 0.3) / 0.07);
    if (head < 1) {
      r = 96;
      g = 78;
      b = 68;
    } else if (Math.abs(fx) < 1 && fy > -0.75 && fy < 1) {
      r = 74 + 30 * Math.sin(v * 12);
      g = 104 + 26 * Math.sin(v * 9);
      b = 96 + 22 * Math.cos(u * 11);
      if (v > 0.76) {
        r = 96;
        g = 112;
        b = 140;
      }
    }

    // floor
    if (v > 0.9) {
      const t = (v - 0.9) / 0.1;
      r = r * (1 - t) + 214 * t;
      g = g * (1 - t) + 216 * t;
      b = b * (1 - t) + 218 * t;
    }

    raw[o++] = Math.max(0, Math.min(255, r));
    raw[o++] = Math.max(0, Math.min(255, g));
    raw[o++] = Math.max(0, Math.min(255, b));
  }
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // truecolour
const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);

const dir = path.join(process.cwd(), 'public');
mkdirSync(dir, { recursive: true });
writeFileSync(path.join(dir, 'hero-placeholder.png'), png);
console.log('wrote public/hero-placeholder.png', png.length, 'bytes');
