import { ChangeRoles } from '@devmx/account-domain';
import { AccountRoleDto } from './account-role';
import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class ChangeRolesDto implements ChangeRoles {
  id: string;

  @IsObject()
  @Type(() => AccountRoleDto)
  @ApiProperty({ type: () => AccountRoleDto })
  currentRoles: AccountRoleDto;

  @IsObject()
  @Type(() => AccountRoleDto)
  @ApiProperty({ type: () => AccountRoleDto })
  newRoles: AccountRoleDto;
}
