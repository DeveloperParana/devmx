import { Role } from '@devmx/shared-api-interfaces';
import { Reflector } from '@nestjs/core';

export const Roles = Reflector.createDecorator<Role[]>();
// export const ROLES_KEY = 'roles';
// export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
