import { Course, CourseSubject } from '@devmx/shared-api-interfaces';
import { AccountCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { InstitutionCollection } from './institution';
import { Prop, raw, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { SubjectSchema } from './subject';

@Schema()
export class CourseCollection extends Document implements Course {
  override id: string;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: String })
  goal: string;

  @Prop([
    {
      type: raw({
        subject: { type: SubjectSchema, required: true },
        instructor: { type: String },
        hours: { type: Number },
      }),
    },
  ])
  subjects: CourseSubject[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: InstitutionCollection.name,
    required: true,
  })
  institution: InstitutionCollection;

  @Prop({ type: String })
  details?: string;

  @Prop({ type: String })
  link?: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: AccountCollection.name,
      },
    ],
  })
  contributors: AccountCollection[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  owner: AccountCollection;
}

export const CourseSchema = createSchema(CourseCollection);
