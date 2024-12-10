import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { EventsService } from '../services';

export class FindEventByIDUseCase implements UseCase<string, Event> {
  constructor(private eventsService: EventsService) {}

  async execute(id: string) {
    const event = await this.eventsService.findOne(id);

    if (!event) {
      throw new NotFoundError(`Evento não encontrado`);
    }

    return event;
  }
}

export function provideFindEventByIDUseCase() {
  return createUseCaseProvider(FindEventByIDUseCase, [EventsService]);
}
