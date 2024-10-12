import { createSchema } from '@devmx/shared-data-source';
import { PointCollection, PointSchema } from './point';
import { City } from '@devmx/shared-api-interfaces';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CityCollection extends Document implements City {
  override id: string;

  @Prop({
    type: String,
    index: 1,
  })
  name: string;

  @Prop({
    type: PointSchema,
    index: '2dsphere',
    required: true,
  })
  location: PointCollection;

  @Prop({ type: Number })
  ibge: number;

  @Prop({ type: Boolean })
  capital: boolean;

  @Prop({ type: Number })
  ibgeState: number;

  @Prop({ type: Number })
  siafi: number;

  @Prop({ type: Number })
  ddd: number;

  @Prop({ type: String })
  timeZone: string;
}

export const CitySchema = createSchema(CityCollection);
