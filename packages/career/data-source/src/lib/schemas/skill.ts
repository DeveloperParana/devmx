import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Skill } from '@devmx/shared-api-interfaces';
import { Document, Types } from 'mongoose';

@Schema()
export class SkillCollection extends Document implements Skill {
  override id: string;

  @Prop({ required: true, type: String })
  name: string;
}

export const SkillSchema = SchemaFactory.createForClass(SkillCollection);

SkillSchema.virtual('id').get(function () {
  return (this._id as Types.ObjectId).toHexString();
});

SkillSchema.set('toJSON', {
  virtuals: true,
});
