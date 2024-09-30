import { PageDto, QueryParamsDto } from '@devmx/shared-data-source';
import { FindEventsUseCase } from '@devmx/event-domain/server';
import { Event } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { EventDto } from '../dtos';

export class EventsFacade {
  constructor(private findEventsUseCase: FindEventsUseCase) {}

  async find(params: QueryParamsDto<Event>) {
    params.filter = { ...params.filter, visible: true };
    const { data, items, pages } = await this.findEventsUseCase.execute(params);
    const presentations = plainToInstance(EventDto, data);
    return new PageDto(presentations, items, pages);
  }
}
