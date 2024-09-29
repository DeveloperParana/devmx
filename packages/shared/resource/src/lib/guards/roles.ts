import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthRequest, Roles } from '@devmx/shared-data-source';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get(Roles, context.getHandler());

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest<AuthRequest>();

    return requiredRoles.some((role) => user.roles[role]);
  }
}
