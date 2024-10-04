import {
  objectId,
  QueryFilterDto,
  QueryParamsDto,
} from '@devmx/shared-data-source';
import { EventsService } from '@devmx/event-domain/server';
import { CreateEventDto, UpdateEventDto } from '../dtos';
import { Event } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';

export class EventsServiceImpl implements EventsService {
  constructor(private eventModel: Model<Event>) {}

  async create(data: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(data);
    return (await createdEvent.save()).toJSON();
  }

  async find(params: QueryParamsDto<Event>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;

    const where = { ...filter };

    const events = await this.eventModel
      .find(where)
      .skip(skip)
      .limit(size)
      .populate('owner', 'name username photo')
      .populate('leaders', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    const data = events.map((item) => item.toJSON());
    const items = await this.eventModel.countDocuments(where).exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const event = await this.eventModel.findById(id)
      .populate('owner', 'name username photo')
      .populate('leaders', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    return event ? event.toJSON() : null;
  }

  async findByOwner(ownerId: string, params: QueryParamsDto<Event>) {
    const { page = 0, size = 10, filter } = params;
    const skip = page * size;

    const owner = objectId(ownerId);

    const events = await this.eventModel
      .find({ ...filter, owner })
      .skip(skip)
      .limit(size)
      .populate('owner', 'name username photo')
      .populate('leaders', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    const data = events.map((item) => item.toJSON());
    const items = await this.eventModel
      .countDocuments({ ...filter, owner })
      .exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOneBy(filter: QueryFilterDto<Event>) {
    const event = await this.eventModel
      .findOne(filter)
      .populate('owner', 'name username photo')
      .populate('leaders', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    return event ? event.toJSON() : null;
  }

  async update(id: string, data: UpdateEventDto) {
    const event = await this.eventModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    return event ? event.toJSON() : null;
  }

  async remove(id: string) {
    const event = await this.eventModel.findOneAndDelete({ _id: id }).exec();

    return event ? event.toJSON() : null;
  }
}
