import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserCollection } from '@devmx/account-data-source';
import mongoose, { Document, Types } from 'mongoose';
import { SkillSchema } from './skill';
import {
  Range,
  JobMode,
  JobType,
  JobSkill,
  JobOpening,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

@Schema()
export class JobOpeningCollection extends Document implements JobOpening {
  override id: string;

  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: String })
  requirements: string;

  @Prop({
    required: true,
    type: String,
    enum: ['junior', 'mid', 'senior', 'internship'],
  })
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

  @Prop([
    {
      type: raw({
        skill: { type: SkillSchema, required: true },
        weight: { type: Number, required: true },
      }),
    },
  ])
  skills: JobSkill[];

  @Prop({ type: String })
  contact?: string;

  @Prop({ type: String })
  company?: string;

  @Prop({ type: String })
  link?: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ default: true })
  open: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserCollection.name,
    required: true,
  })
  owner: UserCollection;
}

export const JobOpeningSchema =
  SchemaFactory.createForClass(JobOpeningCollection);

JobOpeningSchema.virtual('id').get(function () {
  return (this._id as Types.ObjectId).toHexString();
});

JobOpeningSchema.set('toJSON', {
  virtuals: true,
});
