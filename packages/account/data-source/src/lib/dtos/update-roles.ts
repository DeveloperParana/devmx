import { UpdateRoles } from '@devmx/account-domain';
import { UserRolesDto } from './user-roles';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';

export class UpdateRolesDto implements UpdateRoles {
  id: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => UserRolesDto)
  roles: UserRolesDto;
}
