import { CreateEvent, UpdateEvent } from '../../lib/dtos';
import {
  Page,
  Event,
  QueryFilter,
  QueryParams,
  // LocationParams,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class EventsService {
  abstract create(data: CreateEvent): Promise<Event>;

  abstract find(params: QueryParams<Event>): Promise<Page<Event>>;

  abstract findOne(id: string): Promise<Event | null>;

  abstract findByOwner(ownerId: string, params: QueryParams<Event>): Promise<Page<Event>>;

  // abstract findByLocation({ lat, lng, max, min }: LocationParams): Promise

  abstract findOneBy(filter: QueryFilter<Event>): Promise<Event | null>;

  abstract update(id: string, data: UpdateEvent): Promise<Event | null>;

  abstract remove(id: string): Promise<Event | null>;
}
