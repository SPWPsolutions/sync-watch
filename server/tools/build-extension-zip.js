#!/usr/bin/env node
'use strict';
// Packages the Party Sync extension (../extension) as a downloadable zip for the site.
//
// usage: npm run build:extension          (from server/)
//        node tools/build-extension-zip.js [extensionDir] [outDir]
//
// Output: public/downloads/party-sync-<version>.zip, version read from the extension's manifest.json.
// The zip holds one top-level folder, party-sync-<version>/, with manifest.json directly inside it,
// so "unzip, then Load unpacked on that folder" works with any unzip tool.
// README.md files and .DS_Store are left out. Older party-sync-*.zip files in outDir are removed,
// so the server's /download/party-sync.zip always points at the one current build.
// Only this extension is packaged; never point it at the Teleparty copies elsewhere in the repo.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const src = path.resolve(process.argv[2] || path.join(root, '..', 'extension'));
const outDir = path.resolve(process.argv[3] || path.join(root, 'public', 'downloads'));

const manifestPath = path.join(src, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error(`no manifest.json in ${src}`);
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const ALLOWED_NAMES = new Set(['Party Sync', "Wooper's Party"]);
if (!ALLOWED_NAMES.has(manifest.name) || !/^\d+(\.\d+){0,3}$/.test(manifest.version || '')) {
  console.error(`refusing to package ${src}: expected "Wooper's Party" or "Party Sync" with a valid version, got "${manifest.name}" ${manifest.version}`);
  process.exit(1);
}

const name = `woopers-party-${manifest.version}`;
const zipName = `${name}.zip`;
const skip = (f) => f === 'README.md' || f === '.DS_Store';

// Stage a clean copy under the versioned folder name, then zip that folder.
const stage = fs.mkdtempSync(path.join(os.tmpdir(), 'woopers-party-'));
try {
  fs.cpSync(src, path.join(stage, name), { recursive: true, filter: (p) => !skip(path.basename(p)) });

  fs.mkdirSync(outDir, { recursive: true });
  for (const f of fs.readdirSync(outDir)) if (/^(?:woopers-party|party-sync)-.+\.zip$/.test(f)) fs.rmSync(path.join(outDir, f));

  const out = path.join(outDir, zipName);
  // -X drops extra file attributes (uid/gid, macOS metadata) for a portable archive.
  execFileSync('zip', ['-r', '-X', '-q', out, name], { cwd: stage, stdio: 'inherit' });
  console.log(`${path.relative(process.cwd(), out) || out} (${fs.statSync(out).size} bytes) from ${src}`);
} finally {
  fs.rmSync(stage, { recursive: true, force: true });
}
