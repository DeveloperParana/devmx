import { UserCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { PresentationCollection } from './presentation';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {
  PresentationReaction,
  PresentationReactionType,
} from '@devmx/shared-api-interfaces';

@Schema()
export class PresentationReactionCollection
  extends Document
  implements PresentationReaction
{
  override id: string;

  @Prop({
    type: String,
    enum: ['claps', 'mindblowing', 'insightful', 'amazing', 'learned', 'cool'],
    default: 'claps',
  })
  type: PresentationReactionType;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: PresentationCollection.name,
    required: true,
  })
  presentation: PresentationCollection;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserCollection.name,
    required: true,
  })
  owner: UserCollection;
}

export const PresentationReactionSchema = createSchema(
  PresentationReactionCollection
);
