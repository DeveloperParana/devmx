import { FilterOperator } from '../interfaces';
import { SortDirection } from '../types';

export interface Query<T> {
  page?: number;
  limit?: number;
  sort?: Record<keyof T, SortDirection>;

  filters?: {
    [K in keyof T]: FilterOperator<T[K]>;
  };
}
