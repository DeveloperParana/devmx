import { QueryParams } from '@devmx/shared-api-interfaces';

export function createQueryParams<T>({
  page = 0,
  size = 10,
  filter = {},
}: QueryParams<T> = {}) {
  const params = new URLSearchParams();

  params.append('page', `${page}`);
  params.append('size', `${size}`);

  for (const [key, value] of Object.entries(filter)) {
    params.append(`filter[${key}]`, `${value}`);
  }

  return params;
}
