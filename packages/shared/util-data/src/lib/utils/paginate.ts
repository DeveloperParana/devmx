import { Page, QueryParams } from '@devmx/shared-api-interfaces';

export function paginate<T>(
  collection: T[],
  { page = 0, size = 10 }: Pick<QueryParams<T>, 'page' | 'size'>
): Page<T> {
  const start = page * size;

  const data = collection.slice(start, start + size);

  const items = collection.length;

  const pages = Math.ceil(items / size);

  return { data, items, pages };
}
