import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UpdateProfileDto } from './update-profile';
import { UpdateContactDto } from './update-contact';
import { Exclude, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserSocialDto } from './user-social';
import { RolesDto } from './roles';
import {
  UserCode,
  EditableUser,
  UserPassword,
} from '@devmx/shared-api-interfaces';

export class UpdateUserDto implements EditableUser {
  @ApiProperty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  displayName: string;

  active: boolean;

  @Exclude()
  roles: RolesDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => UpdateProfileDto)
  profile: UpdateProfileDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => UpdateContactDto)
  contact: UpdateContactDto;

  @Exclude()
  code?: UserCode;

  @Exclude()
  password?: UserPassword;

  @Type(() => UserSocialDto)
  @ApiProperty({ type: () => [UserSocialDto] })
  social: UserSocialDto[];
}
