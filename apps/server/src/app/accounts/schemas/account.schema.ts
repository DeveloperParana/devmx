import { AccountEntity } from '../entities';
import { createSchema, Name, Gender } from '../../shared';
import { Prop, raw, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account implements AccountEntity {
  id: string

  @Prop(
    raw({
      first: { type: String },
      last: { type: String },
    })
  )
  name: Name;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
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

  @Prop()
  photo?: string;

  @Prop()
  minibio?: string;

  @Prop()
  birthday?: string;

  @Prop()
  active: boolean;
}

export const AccountSchema = createSchema(Account);
