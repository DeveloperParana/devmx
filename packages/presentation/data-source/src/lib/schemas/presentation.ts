import { Presentation, PresentationFormat } from '@devmx/shared-api-interfaces';
import { AccountCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class PresentationCollection extends Document implements Presentation {
  override id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ default: '' })
  description: string;

  @Prop({
    type: String,
    enum: ['talk', 'workshop', 'webinar'],
    default: 'talk',
  })
  format: PresentationFormat;

  @Prop({ default: [] })
  tags: string[];

  @Prop({ default: [] })
  resources: string[];

  @Prop({ default: '' })
  cover: string;

  @Prop({ default: '' })
  video: string;

  @Prop({ default: false })
  visible: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  account: AccountCollection;
}

export const PresentationSchema = createSchema(PresentationCollection);
