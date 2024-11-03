import { mkdirSync, writeFileSync } from 'node:fs';
import { Tree } from '@nx/devkit';

export function addFileToBarrel(tree: Tree, path: string, file: string) {
  if (!tree.exists(path)) {
    mkdirSync(path.replace('/index.ts', ''), { recursive: true });
    writeFileSync(path, '', 'utf-8');
  }

  const currentContent = tree.read(path, 'utf-8');

  const updatedContent = `${currentContent}\nexport * from '${file}';\n`;

  tree.write(path, updatedContent);
}
