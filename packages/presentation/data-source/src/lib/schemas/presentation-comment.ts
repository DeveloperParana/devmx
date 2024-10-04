import { PresentationComment } from '@devmx/shared-api-interfaces';
import { AccountCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { PresentationCollection } from './presentation';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class PresentationCommentCollection
  extends Document
  implements PresentationComment
{
  override id: string;

  @Prop({ type: String })
  text: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: PresentationCollection.name,
    required: true,
  })
  presentation: PresentationCollection;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  owner: AccountCollection;
}

export const PresentationCommentSchema = createSchema(
  PresentationCommentCollection
);
