import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { UseCasesGeneratorSchema } from './schema';
import { normalizeOptions } from './lib';
import { join } from 'path';

export async function useCasesGenerator(
  tree: Tree,
  options: UseCasesGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(options);

  const srcFolder = join(__dirname, '..', '..', 'files', 'use-cases');

  generateFiles(tree, srcFolder, 'packages', normalizedOptions);

  await formatFiles(tree);
}

export default useCasesGenerator;
