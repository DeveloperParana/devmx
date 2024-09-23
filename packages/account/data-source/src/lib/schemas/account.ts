import { Account, Gender, Name } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, raw, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop({ required: true, type: String })
  username: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ required: true, type: String })
  email: string;

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

  @Prop({ default: true })
  active: boolean;
}

export const AccountSchema = createSchema(AccountCollection);
