// Extracts css-loader modules (o.push([n.id, "<css>", ...]); o.locals = {...}) from a webpack bundle.
// Usage: node tools/extract_css_modules.js <bundle.js> <outDir>
const fs = require("fs"), path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const [src, out] = process.argv.slice(2);
const code = fs.readFileSync(src, "utf8");
const ast = parser.parse(code, { sourceType: "script", errorRecovery: true });
fs.mkdirSync(out, { recursive: true });
const index = [];
traverse(ast, {
  ObjectMethod(p) {
    const k = p.node.key;
    const id = k.type === "NumericLiteral" ? k.value : k.type === "Identifier" ? k.name : null;
    if (id === null || !/^\d+$/.test(String(id))) return;
    let css = null, locals = {};
    p.traverse({
      CallExpression(c) {
        const cal = c.node.callee;
        if (cal.type === "MemberExpression" && cal.property.name === "push" && c.node.arguments[0]?.type === "ArrayExpression") {
          const el = c.node.arguments[0].elements;
          if (el[1]?.type === "StringLiteral" && css === null) css = el[1].value;
        }
      },
      AssignmentExpression(a) {
        const l = a.node.left;
        if (l.type === "MemberExpression" && l.property.name === "locals" && a.node.right.type === "ObjectExpression")
          for (const pr of a.node.right.properties) if (pr.value?.type === "StringLiteral") locals[pr.key.name ?? pr.key.value] = pr.value.value;
      },
    });
    if (css === null) return;
    let annotated = css;
    for (const [name, hashed] of Object.entries(locals)) annotated = annotated.split("." + hashed).join(`.${hashed}/*${name}*/`);
    const file = `module_${id}.css`;
    fs.writeFileSync(path.join(out, file), `/* webpack module ${id} | source offset ${p.node.start} */\n/* class map: ${JSON.stringify(locals)} */\n\n${annotated}`);
    index.push({ module: id, file, classes: locals, bytes: css.length });
  },
});
fs.writeFileSync(path.join(out, "index.json"), JSON.stringify(index, null, 2));
console.log(`${index.length} CSS modules -> ${out}`);
