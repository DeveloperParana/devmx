import { PresentationCollection } from '@devmx/presentation-data-source';
import { Event, EventFormat } from '@devmx/shared-api-interfaces';
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

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({
    type: String,
    enum: ['in-person', 'online', 'mixed'],
    default: 'in-person',
  })
  format: EventFormat;

  @Prop({ type: String, required: true, default: '' })
  date: string;

  @Prop({ type: String, required: true, default: '' })
  time: string;

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
    required: true,
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
}

export const EventSchema = createSchema(EventCollection);
