import { buildQueryFilter } from '../utils';
import { QueryFilter } from '../types';

export class QueryFilterDto<T> {
  constructor(filter: QueryFilter<T> = {}) {
    Object.assign(this, buildQueryFilter(filter));
  }
}
