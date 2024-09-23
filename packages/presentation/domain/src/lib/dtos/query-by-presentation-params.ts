import { QueryParams } from '@devmx/shared-api-interfaces';

export interface QueryByPresentationParams<T> extends QueryParams<T> {
  presentation: string;
}
