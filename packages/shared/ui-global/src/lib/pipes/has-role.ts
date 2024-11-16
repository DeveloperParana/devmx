import { Authentication, Role } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasRole',
  standalone: true,
})
export class HasRolePipe implements PipeTransform {
  transform(auth: Authentication | null, ...roles: Role[]) {
    return roles.some((role) => auth?.roles[role]);
  }
}
