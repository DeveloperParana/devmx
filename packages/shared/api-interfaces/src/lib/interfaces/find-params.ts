import { FindFilter } from '../types/find-filter';

export interface FindParams<T> {
  page?: number;

  size?: number;

  filter?: FindFilter<T>;
}
