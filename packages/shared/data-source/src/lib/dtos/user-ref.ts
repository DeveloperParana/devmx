import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { UserRef } from '@devmx/shared-api-interfaces';
import { UserProfileDto } from './user-profile';

export class UserRefDto implements UserRef {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  displayName: string;

  @ApiProperty()
  profile?: UserProfileDto;
}

console.log(getSchemaPath(UserRefDto));
