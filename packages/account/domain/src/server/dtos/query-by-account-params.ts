import { QueryParams } from '@devmx/shared-api-interfaces';

export interface QueryByAccountParams<T> extends QueryParams<T> {
  account: string;
}
