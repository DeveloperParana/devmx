import { IsEmail, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { AutoAssignableRolesDto } from './auto-assignable-roles';
import { CreateUser } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateUserDto implements CreateUser {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  displayName: string;

  @IsObject()
  @Type(() => AutoAssignableRolesDto)
  @ApiProperty({ type: () => AutoAssignableRolesDto })
  roles: AutoAssignableRolesDto;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
}
