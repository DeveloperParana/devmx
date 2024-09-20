import { PresentationCommentEntity } from '../entities';
import mongoose, { HydratedDocument } from 'mongoose';
import { Presentation } from './presentation.schema';
import { Prop, Schema } from '@nestjs/mongoose';
import { createSchema } from '../../shared';
import { Account } from './account.schema';

export type PresentationCommentDocument = HydratedDocument<PresentationComment>;

@Schema()
export class PresentationComment implements PresentationCommentEntity {
  id: string;

  @Prop()
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Presentation' })
  presentation: Presentation;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;
}

export const PresentationCommentSchema = createSchema(PresentationComment);
