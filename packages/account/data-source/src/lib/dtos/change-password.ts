import { ChangePassword } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class ChangePasswordDto implements ChangePassword {
  id: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  currentPassword: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  newPassword: string;
}
