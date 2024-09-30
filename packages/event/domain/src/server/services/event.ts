import { CreateEvent, UpdateEvent } from '../dtos';
import {
  Page,
  Event,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export abstract class EventsService {
  abstract create(data: CreateEvent): Promise<Event>;

  abstract find(params: QueryParams<Event>): Promise<Page<Event>>;

  abstract findOne(id: string): Promise<Event | null>;

  abstract findOneBy(filter: QueryFilter<Event>): Promise<Event | null>;

  abstract update(id: string, data: UpdateEvent): Promise<Event | null>;

  abstract remove(id: string): Promise<Event | null>;
}
