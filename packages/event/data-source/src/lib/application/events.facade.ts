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
    const job = await this.createEventUseCase.execute(data);
    return plainToInstance(EventDto, job);
  }

  async find(params: QueryParamsDto<Event>) {
    const { data, items, pages } = await this.findEventsUseCase.execute(params);
    const jobs = plainToInstance(EventDto, data);
    return new PageDto(jobs, items, pages);
  }

  async findOne(id: string) {
    const job = await this.findEventByIDUseCase.execute(id);
    return plainToInstance(EventDto, job);
  }

  async update(id: string, data: UpdateEventDto) {
    const job = await this.updateEventUseCase.execute({ ...data, id });
    return plainToInstance(EventDto, job);
  }

  async delete(id: string) {
    const job = this.deleteEventUseCase.execute(id);
    return plainToInstance(EventDto, job);
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
