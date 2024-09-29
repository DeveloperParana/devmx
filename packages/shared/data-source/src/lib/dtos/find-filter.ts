import { FindFilter } from '@devmx/shared-api-interfaces';

export class FindFilterDto<T> {
  constructor(filter: FindFilter<T> = {}) {
    Object.assign(this, filter);
  }
}
