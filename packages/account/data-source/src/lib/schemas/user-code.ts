import { UserCode } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class UserCodeCollection implements UserCode {
  @Prop({ required: true, type: String })
  value: string;

  @Prop({ type: Date, default: Date.now })
  timestamp: Date;
}

export const UserCodeSchema = createSchema(UserCodeCollection);
