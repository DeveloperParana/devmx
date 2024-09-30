import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class PointCollection {
  @Prop({
    type: String,
    enum: ['Point'],
    required: true,
  })
  type: 'Point';

  @Prop({
    type: [Number],
    required: true,
  })
  coordinates: [number, number];
}

export const PointSchema = createSchema(PointCollection);
