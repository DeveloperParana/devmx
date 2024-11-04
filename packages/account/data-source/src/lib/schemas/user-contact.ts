import { UserContact } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class UserContactCollection implements UserContact {
  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: false, type: String })
  phone?: string;
}

export const UserContactSchema = createSchema(UserContactCollection);
