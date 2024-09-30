import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { EventsService } from '../services';
import { NotFoundError } from '@devmx/shared-util-errors';

export class FindEventByIDUseCase
  implements UseCase<string, Event>
{
  constructor(private eventsService: EventsService) {}

  async execute(id: string) {
    const event = await this.eventsService.findOne(id);

    if (!event) {
      throw new NotFoundError(`Evento não encontrado`);
    }

    return event;
  }
}
