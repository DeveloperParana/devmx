import { PresentationComment } from '@devmx/shared-api-interfaces';
import { AccountSchema } from '@devmx/account-data-source';
import { PresentationSchema } from './presentation';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ collection: 'presentationComments' })
export class PresentationCommentSchema implements PresentationComment {
  id: string;

  @Prop()
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Presentation' })
  presentation: PresentationSchema;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: AccountSchema;
}
