import { createSchema } from '@devmx/shared-data-source';
import { City } from '@devmx/shared-api-interfaces';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CityCollection extends Document implements City {
  override id: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  ibge: number;

  @Prop({ type: Number })
  lat: number;

  @Prop({ type: Number })
  lng: number;

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
