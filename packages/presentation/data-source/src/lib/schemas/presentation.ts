import { Presentation, PresentationFormat } from '@devmx/shared-api-interfaces';
import { UserCollection } from '@devmx/account-data-source';
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
  link?: string;

  @Prop({ default: '' })
  cover: string;

  @Prop({ default: '' })
  video: string;

  @Prop({ default: false })
  visible: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserCollection.name,
    required: true,
  })
  owner: UserCollection;
}

export const PresentationSchema = createSchema(PresentationCollection);
