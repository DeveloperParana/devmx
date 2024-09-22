import { ChangePassword } from '@devmx/account-domain';
import { IsString, MinLength } from 'class-validator';

export class ChangePasswordDto implements ChangePassword {
  id: string

  @IsString()
  @MinLength(6)
  currentPassword: string;

  @IsString()
  @MinLength(6)
  newPassword: string;
}
