// Dumps webpack raw-loader modules: `<id>(t){ t.exports = "<string>" }`.
// Usage: node tools/extract_raw_modules.js <bundle.js> <outDir>
const fs = require("fs"), path = require("path");
const parser = require("@babel/parser");
const [src, out] = process.argv.slice(2);
const ast = parser.parse(fs.readFileSync(src, "utf8"), { sourceType: "script", errorRecovery: true });
fs.mkdirSync(out, { recursive: true });
let c = 0;
(function walk(node) {
  if (!node || typeof node !== "object") return;
  if (node.type === "ObjectMethod" && node.key.type === "NumericLiteral" && node.body.body.length === 1) {
    const st = node.body.body[0];
    const e = st.expression;
    if (e?.type === "AssignmentExpression" && e.left.property?.name === "exports" && e.right.type === "StringLiteral") {
      fs.writeFileSync(path.join(out, `raw_module_${node.key.value}.html`), `<!-- webpack raw module ${node.key.value} -->\n` + e.right.value);
      c++;
      return;
    }
  }
  for (const k in node) if (k !== "loc") { const v = node[k]; Array.isArray(v) ? v.forEach(walk) : v && typeof v.type === "string" && walk(v); }
})(ast.program);
console.log(`${c} raw modules -> ${out}`);
