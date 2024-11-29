import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UpdateProfileDto } from './update-profile';
import { UpdateContactDto } from './update-contact';
import { Exclude, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserSocialDto } from './user-social';
import { RolesDto } from './roles';
import {
  UserCode,
  EditableUser,
  UserPassword,
} from '@devmx/shared-api-interfaces';
import { UserSkillDto } from './user-skill';

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

  @IsArray()
  @IsOptional()
  @ValidateNested()
  @Type(() => UserSkillDto)
  @ApiPropertyOptional({ type: () => [UserSkillDto] })
  skills: UserSkillDto[];

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
