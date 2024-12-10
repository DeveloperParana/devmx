import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { EditableEntity, QueryParams } from '@devmx/shared-api-interfaces';
import { EventsService } from '@devmx/event-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { EventCollection } from '../schemas';
import { Query } from 'mongoose';

export class EventsMongoServiceImpl
  extends MongoService<EventCollection>
  implements EventsService
{
  async findFrom(date: Date, params: QueryParams<EventCollection>) {
    const { page = 0, size = 10, filter, sort } = params;

    const skip = page * size;
    const where = this.applyFilter(filter ?? {});
    const order = this.applySort(sort ?? {});

    const query = this.entityModel
      .find({ ...where, date: { $gte: date } })
      .sort(order)
      .skip(skip)
      .limit(size);

    const entities = await this.applyPopulate(query).exec();

    const data = entities.map((item) => item.toJSON());
    const items = await this.entityModel.countDocuments(where).exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  protected override applyPopulate<U>(query: Query<U, EventCollection>) {
    return query
      .populate('owner', 'name displayName profile')
      .populate('leaders', 'name displayName profile')
      .populate({
        path: 'presentations',
        select: 'title owner',
        populate: {
          path: 'owner',
          select: 'displayName profile',
        },
      });
  }

  protected override applyEditableParser<U>(
    data: EditableEntity<EventCollection>
  ): U {
    const presentations = (data.presentations ?? []).map((p) => p.id);
    const leaders = (data.leaders ?? []).map((p) => p.id);
    const owner = typeof data.owner === 'string' ? data.owner : data.owner.id;
    return { ...data, owner, leaders, presentations } as U;
  }
}

export function provideEventsMongoService() {
  return createServiceProvider(EventsService, EventsMongoServiceImpl, [
    getModelToken(EventCollection.name),
  ]);
}
