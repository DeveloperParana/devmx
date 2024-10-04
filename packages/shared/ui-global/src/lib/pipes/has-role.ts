import { AuthUser, Role } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasRole',
  standalone: true,
})
export class HasRolePipe implements PipeTransform {
  transform(authUser: AuthUser | null, ...roles: Role[]) {
    return roles.some((role) => authUser?.roles[role]);
  }
}
