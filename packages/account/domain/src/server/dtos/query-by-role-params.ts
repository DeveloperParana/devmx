import { QueryParams, Role } from '@devmx/shared-api-interfaces';

export interface QueryByRoleParams<T> extends QueryParams<T> {
  role: Role;
}
