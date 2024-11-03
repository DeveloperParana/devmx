import { Institution } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InstitutionCollection extends Document implements Institution {
  override id: string;

  @Prop({ required: true, type: String })
  name: string;
}

export const InstitutionSchema = createSchema(InstitutionCollection);
