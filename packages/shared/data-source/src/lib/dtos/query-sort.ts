import { QuerySort } from '@devmx/shared-api-interfaces';
import { createQuerySort } from '../utils';

export class QuerySortDto<T> {
  constructor(filter: QuerySort<T> = {}) {
    Object.assign(this, createQuerySort(filter));
  }
}
