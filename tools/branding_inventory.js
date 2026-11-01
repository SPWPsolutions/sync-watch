// Scans every JS/HTML/CSS/JSON file for brand strings, brand URLs and logo asset refs.
// Usage: node tools/branding_inventory.js <extRoot> <out.tsv>
const fs = require("fs"), path = require("path");
const [root, out] = process.argv.slice(2);
const pats = [
  ["brand_text", /[^"'`<>\n]{0,40}\b(?:Teleparty|Netflix Party|TP Icon)\b[^"'`<>\n]{0,40}/g],
  ["brand_url", /https?:\/\/[a-z0-9.-]*(?:teleparty|netflixparty)\.com[^\s"'`)\\]*/g],
  ["store_url", /https:\/\/chromewebstore\.google\.com\/[^\s"'`\\]+/g],
  ["logo_ref", /img\/(?:tp_[a-z_]+|icon(?:_white|_gradient)?)\.(?:svg|png)/g],
];
const rows = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (f === "_metadata") continue;
    if (fs.statSync(p).isDirectory()) { walk(p); continue; }
    if (!/\.(js|html|css|json)$/.test(f)) continue;
    const s = fs.readFileSync(p, "utf8");
    for (const [kind, re] of pats) {
      const seen = new Map();
      for (const m of s.matchAll(re)) { const k = m[0].trim().replace(/\s+/g, " "); if (!seen.has(k)) seen.set(k, m.index); }
      for (const [k, off] of seen) rows.push([path.relative(root, p), kind, off, k]);
    }
  }
})(root);
fs.writeFileSync(out, "file\tkind\tbyte_offset\tmatch\n" + rows.map((r) => r.join("\t")).join("\n"));
const by = {}; for (const r of rows) by[r[1]] = (by[r[1]] || 0) + 1;
console.log(rows.length, "hits", by);
