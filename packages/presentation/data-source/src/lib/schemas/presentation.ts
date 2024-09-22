import { Presentation, PresentationFormat } from '@devmx/shared-api-interfaces';
import { AccountSchema } from '@devmx/account-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ collection: 'presentations' })
export class PresentationSchema implements Presentation {
  id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({
    type: String,
    enum: ['talk', 'workshop', 'webinar'],
    default: 'talk',
  })
  format: PresentationFormat;

  @Prop()
  tags: string[];

  @Prop()
  resources: string[];

  @Prop()
  visible: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: AccountSchema;
}
