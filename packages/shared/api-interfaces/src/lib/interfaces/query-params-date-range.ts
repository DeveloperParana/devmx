import { QueryParams } from './query-params';

export interface QueryParamsDateRange<T> extends QueryParams<T> {
  start: Date;

  end: Date;
}
