import { QueryLocation } from './query-location';
import { QueryFilter } from '../types/query-filter';
import { QuerySort } from '../types';

export interface QueryParams<T> {
  page?: number;

  size?: number;

  sort?: QuerySort<T>;

  filter?: QueryFilter<T>;

  location?: QueryLocation;
}
