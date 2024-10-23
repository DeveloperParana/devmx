import { Skill } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SkillCollection extends Document implements Skill {
  override id: string;

  @Prop({ required: true, type: String })
  name: string;
}

export const SkillSchema = createSchema(SkillCollection);
