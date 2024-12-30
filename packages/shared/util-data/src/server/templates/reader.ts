import { createReadStream } from 'node:fs';
import { join } from 'node:path';

export function reader(file: string) {
  const path = join(__dirname, 'assets', 'templates', file);
  return createReadStream(path, { encoding: 'utf-8' });
}
