import { PathLike, readFileSync } from 'node:fs';

export function readJson<T>(path: PathLike) {
  return JSON.parse(readFileSync(path, 'utf-8')) as T;
}
