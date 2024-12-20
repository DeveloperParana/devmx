import {
  EventDto,
  CreateEventDto,
  UpdateEventDto,
  CopyEventDto,
} from '../dtos';
import { Event, QueryParamsDateRange } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CopyEventUseCase,
  CreateEventUseCase,
  DeleteEventUseCase,
  FindEventByIDUseCase,
  FindEventsDateRangeUseCase,
  FindEventsFromUseCase,
  FindEventsUntilUseCase,
  FindEventsUseCase,
  FindMyEventsUseCase,
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
    private findMyEventsUseCase: FindMyEventsUseCase,
    private findEventsFromUseCase: FindEventsFromUseCase,
    private findEventsUntilUseCase: FindEventsUntilUseCase,
    private findEventsDateRangeUseCase: FindEventsDateRangeUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
    private copyEventUseCase: CopyEventUseCase,
    private deleteEventUseCase: DeleteEventUseCase
  ) {}

  async create(data: CreateEventDto) {
    const event = await this.createEventUseCase.execute(data);
    return plainToInstance(EventDto, event);
  }

  async copy(id: string, data: CopyEventDto) {
    const event = await this.copyEventUseCase.execute(data);
    return plainToInstance(EventDto, event);
  }

  async find(params: QueryParamsDto<Event>) {
    const { data, items, pages } = await this.findEventsUseCase.execute(params);
    const events = plainToInstance(EventDto, data);
    return new PageDto(events, items, pages);
  }

  async findMyEvents(params: QueryParamsDto<Event>) {
    const { data, items, pages } = await this.findMyEventsUseCase.execute(
      params
    );
    const events = plainToInstance(EventDto, data);
    return new PageDto(events, items, pages);
  }

  async findDateRange(params: QueryParamsDateRange<Event>) {
    const { data, items, pages } =
      await this.findEventsDateRangeUseCase.execute(params);
    const events = plainToInstance(EventDto, data);
    return new PageDto(events, items, pages);
  }

  async findFrom(date: Date, params: QueryParamsDto<Event>) {
    const { data, items, pages } = await this.findEventsFromUseCase.execute([
      date,
      params,
    ]);
    const events = plainToInstance(EventDto, data);
    return new PageDto(events, items, pages);
  }

  async findUntil(date: Date, params: QueryParamsDto<Event>) {
    const { data, items, pages } = await this.findEventsUntilUseCase.execute([
      date,
      params,
    ]);
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
    FindMyEventsUseCase,
    FindEventsFromUseCase,
    FindEventsUntilUseCase,
    FindEventsDateRangeUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    CopyEventUseCase,
    DeleteEventUseCase,
  ]);
}
