import { PresentationEntity, PresentationFormat } from '../entities';
import mongoose, { HydratedDocument } from 'mongoose';
import { createSchema } from '../../shared/mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { Account } from './account.schema';

export type PresentationDocument = HydratedDocument<Presentation>;

@Schema()
export class Presentation implements PresentationEntity {
  id: string

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
  account: Account;
}

export const PresentationSchema = createSchema(Presentation);
