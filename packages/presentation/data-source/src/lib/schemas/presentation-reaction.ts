import { AccountSchema } from '@devmx/account-data-source';
import { PresentationSchema } from './presentation';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {
  PresentationReaction,
  PresentationReactionType,
} from '@devmx/shared-api-interfaces';

@Schema({ collection: 'presentationReactions' })
export class PresentationReactionSchema implements PresentationReaction {
  id: string;

  @Prop({
    type: String,
    enum: [
      'claps',
      'mindblowing',
      'insightful',
      'amazing',
      'interesting',
      'learnedSomething',
      'like',
    ],
    default: 'claps',
  })
  type: PresentationReactionType;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Presentation' })
  presentation: PresentationSchema;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: AccountSchema;
}
