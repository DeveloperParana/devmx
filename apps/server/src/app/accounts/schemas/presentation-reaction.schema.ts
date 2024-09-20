import mongoose, { HydratedDocument } from 'mongoose';
import { Presentation } from './presentation.schema';
import { Prop, Schema } from '@nestjs/mongoose';
import { createSchema } from '../../shared';
import { Account } from './account.schema';
import {
  PresentationReactionType,
  PresentationReactionEntity,
} from '../entities';

export type PresentationReactionDocument =
  HydratedDocument<PresentationReaction>;

@Schema()
export class PresentationReaction implements PresentationReactionEntity {
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
  presentation: Presentation;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;
}

export const PresentationReactionSchema = createSchema(PresentationReaction);
