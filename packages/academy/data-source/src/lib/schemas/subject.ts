import { Subject } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SubjectCollection extends Document implements Subject {
  override id: string;

  @Prop({ required: true, type: String })
  name: string;
}

export const SubjectSchema = createSchema(SubjectCollection);
