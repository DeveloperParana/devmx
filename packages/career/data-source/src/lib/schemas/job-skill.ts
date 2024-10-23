import { JobSkill, Skill } from '@devmx/shared-api-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SkillCollection } from './skill';

@Schema({ _id: false })
export class JobSkillCollection implements JobSkill {
  weight: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: SkillCollection.name })
  skill: Skill;
}

export const JobSkillSchema = SchemaFactory.createForClass(JobSkillCollection);
