import { AccountCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Message } from '@devmx/shared-api-interfaces';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class MessageCollection extends Document implements Message {
  override id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  sender: AccountCollection;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  receiver: AccountCollection;

  @Prop({ type: String })
  text: string;

  @Prop({ type: Buffer })
  audio?: Buffer;

  @Prop({ type: Date, default: Date.now })
  timestamp: Date;

  @Prop({ type: Date })
  readAt?: Date;
}

export const MessageSchema = createSchema(MessageCollection);
