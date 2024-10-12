import { Event, GeoCoords } from '@devmx/shared-api-interfaces';
import { EventsService } from '@devmx/event-domain/server';
import { CreateEventDto, UpdateEventDto } from '../dtos';
import { Model, RootFilterQuery } from 'mongoose';
import {
  objectId,
  QueryFilterDto,
  QueryParamsDto,
} from '@devmx/shared-data-source';

const toRad = (angle: number) => (angle * Math.PI) / 180;

function haversineDistance(
  { lat: lat1, lng: lon1 }: GeoCoords,
  { lat: lat2, lng: lon2 }: GeoCoords
) {
  const R = 6371e3; // Raio da Terra em metros
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export class EventsServiceImpl implements EventsService {
  #refs = {
    owner: { path: 'owner', select: 'name username photo' },
    leaders: { path: 'leaders', select: 'name username photo' },
    city: { path: 'city', select: 'name ibgeState location timeZone' },
    presentations: {
      path: 'presentations',
      select: 'title description cover',
      populate: { path: 'owner', select: 'name username photo' },
    },
  };

  constructor(private eventModel: Model<Event>) {}

  async create(data: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(data);
    return (await createdEvent.save()).toJSON();
  }

  async find(params: QueryParamsDto<Event>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;

    const where: RootFilterQuery<Event> = { ...filter };

    if (params.location) {
      console.log(params.location);
      const { lat, lng, min, max } = params.location;

      where.city = {
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [lat, lng],
            },
            $maxDistance: max,
            $minDistance: min,
          },
        },
      };
    }

    try {
      const events = await this.eventModel
        .find(where)
        .skip(skip)
        .limit(size)
        .populate(this.#refs.owner)
        .populate(this.#refs.leaders)
        .populate(this.#refs.presentations)
        .populate(this.#refs.city)
        .exec();

      const data = events.map((item) => item.toJSON());
      const items = await this.eventModel.countDocuments(where).exec();
      const pages = Math.ceil(items / size);

      return { data, items, pages };
    } catch (err) {
      console.log(err);

      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error();
      }
    }
  }

  async findOne(id: string) {
    const event = await this.eventModel
      .findById(id)
      .populate(this.#refs.owner)
      .populate(this.#refs.leaders)
      .populate(this.#refs.presentations)
      .populate(this.#refs.city)
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
      .populate(this.#refs.owner)
      .populate(this.#refs.leaders)
      .populate(this.#refs.presentations)
      .populate(this.#refs.city)
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
      .populate(this.#refs.owner)
      .populate(this.#refs.leaders)
      .populate(this.#refs.presentations)
      .populate(this.#refs.city)
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
