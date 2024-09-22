import { Account, Gender, Name } from '@devmx/shared-api-interfaces';
import { Prop, raw, Schema } from '@nestjs/mongoose';

@Schema({ collection: 'accounts' })
export class AccountSchema implements Account {
  id: string;

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
