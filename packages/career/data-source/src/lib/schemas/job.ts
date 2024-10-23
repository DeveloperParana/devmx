import { AccountCollection } from '@devmx/account-data-source';
import { CityCollection } from '@devmx/location-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, raw, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { JobSkillSchema } from './job-skill';
import {
  Job,
  Range,
  JobMode,
  JobType,
  JobSkill,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

@Schema()
export class JobCollection extends Document implements Job {
  override id: string;

  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: String })
  requirements: string;

  @Prop({ required: true, type: String, enum: ['junior', 'mid', 'senior'] })
  experience: ExperienceLevel;

  @Prop({ required: true, type: String, enum: ['CLT', 'PJ'] })
  contract: JobContract;

  @Prop({
    required: true,
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'freelance'],
  })
  type: JobType;

  @Prop({ required: true, type: String, enum: ['office', 'remote', 'hybrid'] })
  mode: JobMode;

  @Prop({ type: String })
  benefits?: string;

  @Prop(
    raw({
      min: { type: Number },
      max: { type: Number },
    })
  )
  salary?: Range;

  @Prop([JobSkillSchema])
  skills: JobSkill[];

  @Prop({ type: String })
  contact?: string;

  @Prop({ type: String })
  company?: string;

  @Prop({ type: String })
  link?: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: CityCollection.name,
    required: false,
  })
  city: CityCollection;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  owner: AccountCollection;
}

export const JobSchema = createSchema(JobCollection);
