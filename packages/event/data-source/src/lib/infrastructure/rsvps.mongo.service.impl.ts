import { createServiceProvider } from '@devmx/shared-data-source';
import { RSVPStatus } from '@devmx/shared-api-interfaces';
import { RSVPsService } from '@devmx/event-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { RSVPCollection } from '../schemas';
import { Model } from 'mongoose';

export class RSVPsMongoServiceImpl implements RSVPsService {
  constructor(private rsvpModel: Model<RSVPCollection>) {}

  async create(account: string, event: string, status: RSVPStatus) {
    return await this.rsvpModel
      .findOneAndUpdate(
        { account, event },
        { status },
        { upsert: true, new: true }
      )
      .exec();
  }

  async findByEvent(event: string) {
    const data = await this.rsvpModel
      .find({ event })
      .populate('account', 'name photo')
      .populate('event', 'title')
      .exec();

    return data.map((item) => item.toJSON());
  }

  async findConfirmedByEvent(event: string) {
    const data = await this.rsvpModel
      .find({ event, status: 'confirmed' })
      .populate('account', 'name photo')
      .populate('event', 'title')
      .exec();

    return data.map((item) => item.toJSON());
  }
}

export function provideRSVPsMongoService() {
  return createServiceProvider(RSVPsService, RSVPsMongoServiceImpl, [
    getModelToken(RSVPCollection.name),
  ]);
}
