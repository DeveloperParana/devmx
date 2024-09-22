import { QueryFilter } from '../types/query-filter';

export interface QueryParams<T> {
  page?: number;

  size?: number;

  filter?: QueryFilter<T>;
}
