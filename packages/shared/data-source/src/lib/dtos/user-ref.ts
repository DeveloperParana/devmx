import { UserRef } from '@devmx/shared-api-interfaces';
import { UserProfileDto } from './user-profile';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserRefDto implements UserRef {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  displayName: string;

  @ApiPropertyOptional()
  profile?: UserProfileDto;
}
