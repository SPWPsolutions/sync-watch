#!/usr/bin/env python3
"""Generate the Safari flavour of the extension from ../extension.

Output: safari/build/extension (a plain Manifest V3 folder that Safari's converter or Xcode consumes).
The Chrome source is never modified.
"""
import json
import pathlib
import shutil

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE.parent / 'extension'
OUT = HERE / 'build' / 'extension'
SAFARI_DIR = 'safari'  # folder inside the built extension that holds Safari-only files

def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    shutil.copytree(SRC, OUT, ignore=shutil.ignore_patterns('README.md', '.DS_Store'))
    (OUT / SAFARI_DIR).mkdir()
    shutil.copy(HERE / 'src' / 'compat.js', OUT / SAFARI_DIR / 'compat.js')
    loader_template = (HERE / 'src' / 'main-world-loader.js').read_text()

    manifest = json.loads((SRC / 'manifest.json').read_text())
    manifest.pop('minimum_chrome_version', None)
    compat = f'{SAFARI_DIR}/compat.js'

    scripts, accessible = [], []
    for entry in manifest['content_scripts']:
        if entry.get('world') == 'MAIN':
            # Swap each main-world script for an isolated loader that injects it as <script src>.
            loaders = []
            for file in entry['js']:
                name = file.replace('/', '-')
                loader = f'{SAFARI_DIR}/load-{name}'
                (OUT / loader).write_text(loader_template.replace('__FILE__', file))
                loaders.append(loader)
                accessible.append({'resources': [file], 'matches': entry['matches']})
            new = {k: v for k, v in entry.items() if k != 'world'}
            new['js'] = [compat] + loaders
            scripts.append(new)
        else:
            entry['js'] = [compat] + entry['js']
            scripts.append(entry)
    manifest['content_scripts'] = scripts
    if accessible:
        manifest['web_accessible_resources'] = manifest.get('web_accessible_resources', []) + accessible

    (OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n')

    popup = OUT / 'popup' / 'popup.html'
    html = popup.read_text()
    tag = '<script src="popup.js"></script>'
    if tag not in html:
        raise SystemExit('popup.html no longer has the expected popup.js tag; update build.py')
    popup.write_text(html.replace(tag, f'<script src="../{compat}"></script>\n  {tag}'))

    bg = manifest['background']['service_worker']
    bg_path = OUT / bg
    bg_src = bg_path.read_text()
    # Generic mode registers content scripts at runtime; give them the shim too.
    marker = 'const COMPAT = [];'
    if marker not in bg_src:
        raise SystemExit('background.js no longer has the COMPAT marker; update build.py')
    bg_src = bg_src.replace(marker, f"const COMPAT = ['{compat}'];", 1)
    bg_path.write_text(f"importScripts('{compat}');\n" + bg_src)

    print(f'Built Safari extension at {OUT}')

if __name__ == '__main__':
    main()
