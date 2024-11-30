import { Gender, UserProfile } from '@devmx/shared-api-interfaces';
import { CityCollection } from '@devmx/location-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class UserProfileCollection implements UserProfile {
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

  @Prop({ default: '', type: Date })
  birthday?: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: CityCollection.name,
    required: false,
  })
  city: CityCollection;
}

export const UserProfileSchema = createSchema(UserProfileCollection);
