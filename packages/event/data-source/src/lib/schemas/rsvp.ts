import { RSVP, RSVPStatus } from '@devmx/shared-api-interfaces';
import { AccountCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { EventCollection } from './event';

@Schema()
export class RSVPCollection extends Document implements RSVP {
  override id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  account: AccountCollection;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: EventCollection.name,
    required: true,
  })
  event: EventCollection;

  @Prop({
    type: String,
    enum: ['confirmed', 'declined', 'maybe'],
    default: 'maybe',
  })
  status: RSVPStatus;
}

export const RSVPSchema = createSchema(RSVPCollection);

RSVPSchema.index({ account: 1, event: 1 }, { unique: true });
