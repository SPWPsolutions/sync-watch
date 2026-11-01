// Extracts raw-loader HTML/string-template modules (module.exports = "<...>") and large inline
// template literals containing markup from a webpack bundle.
// Usage: node tools/extract_html_templates.js <bundle.js> <outDir>
const fs = require("fs"), path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const [src, out] = process.argv.slice(2);
const code = fs.readFileSync(src, "utf8");
const ast = parser.parse(code, { sourceType: "script", errorRecovery: true });
fs.mkdirSync(out, { recursive: true });
const index = [];
const describe = (s) => {
  const ids = [...s.matchAll(/id="([^"$]+)"/g)].map((m) => m[1]).slice(0, 6);
  const ph = [...new Set([...s.matchAll(/\{([A-Z_]{3,})\}/g)].map((m) => m[1]))];
  return { ids, placeholders: ph };
};
let n = 0;
traverse(ast, {
  "StringLiteral|TemplateLiteral"(p) {
    let s;
    if (p.node.type === "StringLiteral") s = p.node.value;
    else s = p.node.quasis.map((q, i) => q.value.cooked + (i < p.node.expressions.length ? "${" + code.slice(p.node.expressions[i].start, p.node.expressions[i].end) + "}" : "")).join("");
    if (s.length < 400 || !/<(div|style|span|button|svg|p)\b/.test(s)) return;
    const name = `tpl_${String(++n).padStart(3, "0")}_off${p.node.start}.html`;
    fs.writeFileSync(path.join(out, name), `<!-- source offset ${p.node.start}, length ${s.length} -->\n${s}`);
    index.push({ file: name, offset: p.node.start, length: s.length, brand: (s.match(/Teleparty/g) || []).length, ...describe(s) });
    p.skip();
  },
});
fs.writeFileSync(path.join(out, "index.json"), JSON.stringify(index, null, 2));
console.log(`${index.length} templates -> ${out}`);
