import { AutoAssignableRoles } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class AutoAssignableRolesDto implements AutoAssignableRoles {
  @IsBoolean()
  @ApiProperty()
  member: boolean;

  @IsBoolean()
  @ApiProperty()
  academic: boolean;

  @IsBoolean()
  @ApiProperty()
  recruiter: boolean;

  @IsBoolean()
  @ApiProperty()
  speaker: boolean;

  @Exclude()
  donor: boolean;

  @Exclude()
  neighbor: boolean;

  @Exclude()
  leader: boolean;

  @Exclude()
  staff: boolean;

  @Exclude()
  fellow: boolean;

  @Exclude()
  manager: boolean;

  @Exclude()
  director: boolean;
}
