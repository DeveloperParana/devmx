import { UserRef, UserTag } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UserRefDto } from './user-ref';

export class UserTagDto implements UserTag {
  @ApiProperty()
  x: number;

  @ApiProperty()
  y: number;

  @Type(() => UserRefDto)
  user: UserRef;
}
