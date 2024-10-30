import { EventDto, CreateEventDto, UpdateEventDto } from '../dtos';
import { Event } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateEventUseCase,
  DeleteEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class EventsFacade {
  constructor(
    private createEventUseCase: CreateEventUseCase,
    private findEventsUseCase: FindEventsUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
    private deleteEventUseCase: DeleteEventUseCase
  ) {}

  async create(data: CreateEventDto) {
    const event = await this.createEventUseCase.execute(data);
    return plainToInstance(EventDto, event);
  }

  async find(params: QueryParamsDto<Event>) {
    const { data, items, pages } = await this.findEventsUseCase.execute(params);
    const events = plainToInstance(EventDto, data);
    return new PageDto(events, items, pages);
  }

  async findOne(id: string) {
    const event = await this.findEventByIDUseCase.execute(id);
    return plainToInstance(EventDto, event);
  }

  async update(id: string, data: UpdateEventDto) {
    const event = await this.updateEventUseCase.execute({ ...data, id });
    return plainToInstance(EventDto, event);
  }

  async delete(id: string) {
    const event = this.deleteEventUseCase.execute(id);
    return plainToInstance(EventDto, event);
  }
}

export function provideEventsFacade() {
  return createServerProvider(EventsFacade, [
    CreateEventUseCase,
    FindEventsUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    DeleteEventUseCase,
  ]);
}
