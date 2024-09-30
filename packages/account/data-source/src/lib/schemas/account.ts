import { createSchema } from '@devmx/shared-data-source';
import { CityCollection } from '@devmx/location-data-source';
import { Prop, raw, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {
  Name,
  Gender,
  Account,
  AccountRole,
} from '@devmx/shared-api-interfaces';

@Schema()
export class AccountCollection extends Document implements Account {
  override id: string;

  @Prop(
    raw({
      first: { type: String },
      last: { type: String },
    })
  )
  name: Name;

  @Prop({ required: true, unique: true, type: String })
  username: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, type: Object })
  roles: AccountRole;

  @Prop({
    type: String,
    enum: [
      'male',
      'female',
      'non-binary',
      'gender-fluid',
      'agender',
      'other',
      'prefer-not-to-say',
    ],
    default: 'prefer-not-to-say',
  })
  gender: Gender;

  @Prop({ default: '' })
  photo?: string;

  @Prop({ default: '' })
  minibio?: string;

  @Prop({ default: '' })
  birthday?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: CityCollection.name,
    required: false,
  })
  city: CityCollection;

  @Prop({ default: true })
  active: boolean;
}

export const AccountSchema = createSchema(AccountCollection);
