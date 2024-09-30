import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { PersistenceError } from '@devmx/shared-util-errors';
import { EventsService } from '../services';

export class RemoveEventUseCase implements UseCase<string, Event> {
  constructor(private eventsService: EventsService) {}

  async execute(id: string) {
    const removed = await this.eventsService.remove(id);

    if (!removed) {
      throw new PersistenceError(`Algo deu errado ao remover evento`);
    }

    return removed;
  }
}
