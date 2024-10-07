import { QueryFilter } from '../types/query-filter';
import { QueryLocation } from './query-location';

export interface QueryParams<T> {
  page?: number;

  size?: number;

  filter?: QueryFilter<T>;

  location?: QueryLocation;
}
