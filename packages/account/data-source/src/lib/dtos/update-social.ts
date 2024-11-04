import { UpdateSocial } from '@devmx/account-domain';
import { UserSocialDto } from './user-social';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateSocialDto implements UpdateSocial {
  id: string;

  @Type(() => UserSocialDto)
  @ApiProperty({ type: () => [UserSocialDto] })
  social: UserSocialDto[];
}
