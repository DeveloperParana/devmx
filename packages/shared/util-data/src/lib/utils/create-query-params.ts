import { QueryParams } from '@devmx/shared-api-interfaces';

export function createQueryParams<T>({
  page = 0,
  size = 10,
  filter = {},
  sort = {},
  location,
}: QueryParams<T> = {}) {
  const params = new URLSearchParams();

  params.append('page', `${page}`);
  params.append('size', `${size}`);

  for (const [key, value] of Object.entries(filter)) {
    if (value) params.append(`filter[${key}]`, `${value}`);
  }

  for (const [key, value] of Object.entries(sort)) {
    if (value) params.append(`sort[${key}]`, `${value}`);
  }

  if (location) {
    for (const [key, value] of Object.entries(location)) {
      if (value) params.append(`location[${key}]`, `${value}`);
    }
  }

  return params;
}
