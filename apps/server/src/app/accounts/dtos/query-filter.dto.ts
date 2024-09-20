import { QueryFilter, buildQueryFilter } from '../../shared';

export class QueryFilterDto<T> {
  constructor(filter: QueryFilter<T> = {}) {
    Object.assign(this, buildQueryFilter(filter));
  }
}
