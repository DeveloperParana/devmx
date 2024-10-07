import { AccountRole } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class AccountRoleDto implements AccountRole {
  @ApiProperty()
  member: boolean;

  @ApiProperty()
  speaker: boolean;

  @ApiProperty()
  recruiter: boolean;

  @ApiProperty()
  donor: boolean;

  @ApiProperty()
  neighbor: boolean;

  @ApiProperty()
  leader: boolean;

  @ApiProperty()
  staff: boolean;

  @ApiProperty()
  fellow: boolean;

  @ApiProperty()
  manager: boolean;

  @ApiProperty()
  director: boolean;
}
