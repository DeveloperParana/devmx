import { createServiceProvider } from '@devmx/shared-data-source';
import { RSVPStatus } from '@devmx/shared-api-interfaces';
import { RSVPsService } from '@devmx/event-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { RSVPCollection } from '../schemas';
import { Model } from 'mongoose';

export class RSVPsMongoServiceImpl implements RSVPsService {
  constructor(private rsvpModel: Model<RSVPCollection>) {}

  async create(account: string, event: string, status: RSVPStatus) {
    return await this.rsvpModel.findOneAndUpdate(
      { account, event },
      { status },
      { upsert: true, new: true }
    );
  }

  async findByEvent(event: string) {
    return await this.rsvpModel.find({ event }).populate('account', 'name');
  }
}

export function provideRSVPsMongoService() {
  return createServiceProvider(RSVPsService, RSVPsMongoServiceImpl, [
    getModelToken(RSVPCollection.name),
  ]);
}
