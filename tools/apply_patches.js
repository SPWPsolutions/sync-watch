// Applies exact-string patches to files under an extension dir, asserting the expected match count
// so a patch never silently misses or over-matches after an upstream update.
// Usage: node tools/apply_patches.js <extDir> <patches.json>
// patches.json: [{ "files": "popup_react_bundled.js" | "content_scripts/*/*_content_bundled.js",
//                  "find": "...", "replace": "...", "expect": 1 }]   (expect = matches per file; omit = any >=1)
const fs = require("fs"), path = require("path");
const [dir, pf] = process.argv.slice(2);
const glob = (pat) => {
  const parts = pat.split("/");
  let cur = [dir];
  for (const part of parts) {
    const re = new RegExp("^" + part.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$");
    cur = cur.flatMap((d) => (fs.existsSync(d) && fs.statSync(d).isDirectory() ? fs.readdirSync(d).filter((f) => re.test(f)).map((f) => path.join(d, f)) : []));
  }
  return cur;
};
let failed = 0;
for (const p of JSON.parse(fs.readFileSync(pf, "utf8"))) {
  const files = glob(p.files);
  if (!files.length) { console.error("NO FILES:", p.files); failed++; continue; }
  for (const f of files) {
    const s = fs.readFileSync(f, "utf8");
    const n = s.split(p.find).length - 1;
    if (n === 0 || (p.expect !== undefined && n !== p.expect)) { console.error(`SKIP ${path.relative(dir, f)}: "${p.find.slice(0, 50)}" matched ${n}x (expected ${p.expect ?? ">=1"})`); failed++; continue; }
    fs.writeFileSync(f, s.split(p.find).join(p.replace));
    console.log(`ok  ${path.relative(dir, f)}: ${n}x "${p.find.slice(0, 50)}"`);
  }
}
process.exit(failed ? 1 : 0);
