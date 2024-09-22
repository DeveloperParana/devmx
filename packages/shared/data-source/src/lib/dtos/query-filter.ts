import { QueryFilter } from '@devmx/shared-api-interfaces';
import { createQueryFilter } from '../utils';

export class QueryFilterDto<T> {
  constructor(filter: QueryFilter<T> = {}) {
    Object.assign(this, createQueryFilter(filter));
  }
}
