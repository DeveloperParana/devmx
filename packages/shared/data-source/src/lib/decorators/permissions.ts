import { CustomDecorator } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export enum Permission {
  CreateEvent = 'event:create',
}

export const Permissions: (...permissions: Permission[]) => CustomDecorator =
  Reflector.createDecorator();

// : (() => CustomDecorator) & {
//   KEY: string;
// }
