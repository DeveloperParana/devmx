import { SetMetadata } from '@nestjs/common';

export const IS_ALLOWED_KEY = 'isAllowed';
export const Allowed = () => SetMetadata(IS_ALLOWED_KEY, true);
