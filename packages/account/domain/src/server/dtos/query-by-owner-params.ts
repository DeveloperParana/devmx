import { QueryParams } from '@devmx/shared-api-interfaces';

export interface QueryByOwnerParams<T> extends QueryParams<T> {
  owner: string;
}
