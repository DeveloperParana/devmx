import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { PersistenceError } from '@devmx/shared-util-errors';
import { EventsService } from '../services';

export class DeleteEventUseCase implements UseCase<string, Event> {
  constructor(private eventsService: EventsService) {}

  async execute(id: string) {
    const removed = await this.eventsService.delete(id);

    if (!removed) {
      throw new PersistenceError(`Algo deu errado ao remover evento`);
    }

    return removed;
  }
}

export function provideDeleteEventUseCase() {
  return createUseCaseProvider(DeleteEventUseCase, [EventsService]);
}
