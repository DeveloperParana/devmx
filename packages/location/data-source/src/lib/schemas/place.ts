import { createSchema } from '@devmx/shared-data-source';
import { PointCollection, PointSchema } from './point';
import { Place } from '@devmx/shared-api-interfaces';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class PlaceCollection extends Document implements Place {
  override id: string;

  @Prop({ required: true, index: 1, type: String })
  name: string;

  @Prop({ required: true, type: String })
  address: string;

  @Prop({ type: PointSchema, index: '2dsphere', required: true })
  location: PointCollection;

  @Prop({
    type: Types.ObjectId,
    ref: 'AccountCollection',
    required: true,
  })
  creator: Types.ObjectId;
}

export const PlaceSchema = createSchema(PlaceCollection);
