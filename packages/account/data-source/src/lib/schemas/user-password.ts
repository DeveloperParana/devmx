import { UserPassword } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class UserPasswordCollection implements UserPassword {
  @Prop({ required: true, type: String })
  hash: string;

  @Prop({ required: true, type: String })
  salt: number | string;
}

export const UserPasswordSchema = createSchema(UserPasswordCollection);
