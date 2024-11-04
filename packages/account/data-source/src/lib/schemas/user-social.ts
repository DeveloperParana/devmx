import { UserSocial, UserSocialType } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class UserSocialCollection implements UserSocial {
  @Prop({
    required: true,
    enum: ['github', 'whatsApp', 'linkedIn', 'instagram', 'notion', 'website'],
    type: String,
  })
  type: UserSocialType;

  @Prop({ required: true, type: String })
  username: string;
}

export const UserSocialSchema = createSchema(UserSocialCollection);
