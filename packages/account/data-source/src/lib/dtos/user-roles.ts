import { Roles } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UserRolesDto implements Roles {
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

  @IsBoolean()
  @ApiProperty()
  donor: boolean;

  @IsBoolean()
  @ApiProperty()
  neighbor: boolean;

  @IsBoolean()
  @ApiProperty()
  leader: boolean;

  @IsBoolean()
  @ApiProperty()
  staff: boolean;

  @IsBoolean()
  @ApiProperty()
  fellow: boolean;

  @IsBoolean()
  @ApiProperty()
  manager: boolean;

  @IsBoolean()
  @ApiProperty()
  director: boolean;
}
