import { PresentationCollection } from '@devmx/presentation-data-source';
import { Event, EventFormat } from '@devmx/shared-api-interfaces';
import { AccountCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {
  PointSchema,
  CityCollection,
  PointCollection,
} from '@devmx/location-data-source';

@Schema()
export class EventCollection extends Document implements Event {
  override id: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({
    type: String,
    enum: ['in-person', 'online', 'mixed'],
    default: 'in-person',
    required: true,
  })
  format: EventFormat;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ type: String, default: '' })
  date?: string;

  @Prop({ type: String, default: '' })
  time?: string;

  @Prop({ default: '' })
  cover: string;

  @Prop({ default: false })
  visible: boolean;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: PresentationCollection.name,
      },
    ],
  })
  presentations: PresentationCollection[];

  @Prop({
    type: String,
  })
  address: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: CityCollection.name,
  })
  city?: CityCollection;

  @Prop({
    type: PointSchema,
    index: '2dsphere',
  })
  location?: PointCollection;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: AccountCollection.name,
      },
    ],
  })
  leaders: AccountCollection[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  owner: AccountCollection;
}

export const EventSchema = createSchema(EventCollection);
