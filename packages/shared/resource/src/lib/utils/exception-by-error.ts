import { RawError } from '@devmx/shared-util-errors';
import {
  NotFoundException,
  ConflictException,
  ForbiddenException,
  BadRequestException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';

export function exceptionByError(error: unknown) {
  const isError =
    error && typeof error === 'object' && 'code' in error && 'message' in error;

  if (error instanceof RawError || isError) {
    switch (error.code) {
      case 400:
        return new BadRequestException(error.message);
      case 401:
        return new UnauthorizedException(error.message);
      case 403:
        return new ForbiddenException(error.message);
      case 404:
        return new NotFoundException(error.message);
      case 409:
        return new ConflictException(error.message);
      case 422:
        return new UnprocessableEntityException(error.message);
      default:
        return new BadRequestException(error.message);
    }
  }

  return new BadRequestException();
}
