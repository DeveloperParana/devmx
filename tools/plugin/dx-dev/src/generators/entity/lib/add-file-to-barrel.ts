import { Tree } from '@nx/devkit';

export function addFileToBarrel(tree: Tree, path: string, file: string) {
  if (!tree.exists(path)) {
    throw new Error(`Barrel file ${path} not found.`);
  }

  const currentContent = tree.read(path, 'utf-8');

  const updatedContent = `${currentContent}\nexport * from '${file}';\n`;

  tree.write(path, updatedContent);
}
