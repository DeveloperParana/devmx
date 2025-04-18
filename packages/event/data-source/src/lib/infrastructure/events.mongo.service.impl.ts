import { Query, RootFilterQuery, SortOrder } from 'mongoose';
import { EventsService } from '@devmx/event-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { EventCollection } from '../schemas';
import {
  QueryParams,
  EditableEntity,
  QueryParamsDateRange,
} from '@devmx/shared-api-interfaces';
import {
  objectId,
  MongoService,
  createServiceProvider,
} from '@devmx/shared-data-source';

export class EventsMongoServiceImpl
  extends MongoService<EventCollection>
  implements EventsService
{
  async findDateRange(params: QueryParamsDateRange<EventCollection>) {
    const { page = 0, size = 10, start, end } = params;

    const skip = page * size;
    const filter = this.applyFilter(params.filter ?? {});
    const sort = this.applySort(params.sort ?? {});

    const where = { ...filter, date: { $gte: start, $lte: end } };

    return this.findByWhere(where, sort, skip, size);
  }

  async findMyEvents(params: QueryParams<EventCollection>) {
    const { page = 0, size = 10 } = params;

    const skip = page * size;
    const filter = this.applyFilter(params.filter ?? {});
    const sort = this.applySort(params.sort ?? {});

    const { owner = '' } = params.filter ?? {};

    const where = { ...filter, leaders: { $in: [objectId(String(owner))] } };

    return this.findByWhere(where, sort, skip, size);
  }

  async findFrom(date: Date, params: QueryParams<EventCollection>) {
    const { page = 0, size = 10 } = params;

    const skip = page * size;
    const filter = this.applyFilter(params.filter ?? {});
    const sort = this.applySort(params.sort ?? {});

    const where = { ...filter, date: { $gte: date } };

    return this.findByWhere(where, sort, skip, size);
  }

  async findUntil(date: Date, params: QueryParams<EventCollection>) {
    const { page = 0, size = 10 } = params;

    const skip = page * size;
    const filter = this.applyFilter(params.filter ?? {});
    const sort = this.applySort(params.sort ?? {});

    const where = { ...filter, date: { $lte: date } };

    return this.findByWhere(where, sort, skip, size);
  }

  async findByWhere(
    where: RootFilterQuery<EventCollection>,
    sort: Record<string, SortOrder>,
    skip: number,
    size: number
  ) {
    const query = this.entityModel
      .find(where)
      .sort(sort)
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
        select: 'title description owner',
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

    if (!data.id) leaders.push(owner);

    return { ...data, owner, leaders, presentations } as U;
  }
}

export function provideEventsMongoService() {
  return createServiceProvider(EventsService, EventsMongoServiceImpl, [
    getModelToken(EventCollection.name),
  ]);
}
