import { UserPasswordCollection, UserPasswordSchema } from './user-password';
import { UserContactCollection, UserContactSchema } from './user-contact';
import { UserProfileCollection, UserProfileSchema } from './user-profile';
import { UserSocialCollection, UserSocialSchema } from './user-social';
import { UserCodeCollection, UserCodeSchema } from './user-code';
import { Roles, User } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { DEFAULT_ROLES } from '@devmx/shared-util-data';
import { Prop, raw, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserCollection extends Document implements User {
  override id: string;

  @Prop({ required: true, unique: true, index: 'text', type: String })
  name: string;

  @Prop({ required: true, type: String })
  displayName: string;

  @Prop({ default: true, type: Boolean })
  active: boolean;

  @Prop({ required: true, type: Object, default: DEFAULT_ROLES })
  roles: Roles;

  @Prop({ required: true, type: raw(UserContactSchema) })
  contact: UserContactCollection;

  @Prop({ required: false, type: raw(UserCodeSchema) })
  code?: UserCodeCollection;

  @Prop({ required: false, type: raw(UserPasswordSchema) })
  password?: UserPasswordCollection;

  @Prop({ required: false, type: raw(UserProfileSchema) })
  profile?: UserProfileCollection;

  @Prop([{ required: false, type: raw(UserSocialSchema) }])
  social?: UserSocialCollection[];
}

export const UserSchema = createSchema(UserCollection);
