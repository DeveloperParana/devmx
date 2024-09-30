import { PageDto, QueryParamsDto } from '@devmx/shared-data-source';
import {
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  RemoveEventUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/server';
import { Event } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { CreateEventDto, EventDto, UpdateEventDto } from '../dtos';

export class EventsFacade {
  constructor(
    private createEventUseCase: CreateEventUseCase,
    private findEventsUseCase: FindEventsUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
    private removeEventUseCase: RemoveEventUseCase
  ) {}

  async create(data: CreateEventDto) {
    const presentation = await this.createEventUseCase.execute(data);
    return plainToInstance(EventDto, presentation);
  }

  async find(params: QueryParamsDto<Event>) {
    params.filter = { ...params.filter, visible: true };
    const { data, items, pages } = await this.findEventsUseCase.execute(params);
    const presentations = plainToInstance(EventDto, data);
    return new PageDto(presentations, items, pages);
  }

  async findOne(id: string) {
    const presentation = await this.findEventByIDUseCase.execute(id);
    return plainToInstance(EventDto, presentation);
  }

  async update(id: string, data: UpdateEventDto) {
    const presentation = await this.updateEventUseCase.execute({ ...data, id });
    return plainToInstance(EventDto, presentation);
  }

  async remove(id: string) {
    const presentation = this.removeEventUseCase.execute(id);
    return plainToInstance(EventDto, presentation);
  }
}
