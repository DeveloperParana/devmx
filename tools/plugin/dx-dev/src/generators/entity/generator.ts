import { Tree, formatFiles, generateFiles, workspaceRoot } from '@nx/devkit';
import { addFileToBarrel, buildBarrelPaths, normalizeOptions } from './lib';
import { EntityGeneratorSchema } from './schema';
import { join } from 'node:path';

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(options);

  generateFiles(
    tree,
    join(__dirname, 'files'),
    join(workspaceRoot, 'packages'),
    normalizedOptions
  );

  const barrels = buildBarrelPaths(
    normalizedOptions.scope,
    normalizedOptions.fileName
  );

  for (const { path, file } of barrels) {
    addFileToBarrel(tree, path, file);
  }

  await formatFiles(tree);
}

export default entityGenerator;
