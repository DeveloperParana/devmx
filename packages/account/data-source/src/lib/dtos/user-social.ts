import { UserSocial, UserSocialType } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class UserSocialDto implements UserSocial {
  @ApiProperty({
    enum: ['github', 'whatsApp', 'linkedIn', 'instagram', 'notion', 'website'],
  })
  type: UserSocialType;

  @ApiProperty()
  username: string;
}
