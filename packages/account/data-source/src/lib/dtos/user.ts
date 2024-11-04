import { User, UserCode, UserPassword } from '@devmx/shared-api-interfaces';
import { Exclude, Type } from 'class-transformer';
import { UserContactDto } from './user-contact';
import { UserProfileDto } from './user-profile';
import { ApiProperty } from '@nestjs/swagger';
import { UserSocialDto } from './user-social';
import { RolesDto } from './roles';

export class UserDto implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  displayName: string;

  @ApiProperty()
  active: boolean;

  @Type(() => RolesDto)
  @ApiProperty({ type: () => RolesDto })
  roles: RolesDto;

  @ApiProperty()
  @Type(() => UserContactDto)
  contact: UserContactDto;

  @Exclude()
  code?: UserCode;

  @Exclude()
  password?: UserPassword;

  @ApiProperty()
  @Type(() => UserProfileDto)
  profile?: UserProfileDto;

  @ApiProperty({ type: () => [UserSocialDto] })
  @Type(() => UserSocialDto)
  social?: UserSocialDto[];
}
