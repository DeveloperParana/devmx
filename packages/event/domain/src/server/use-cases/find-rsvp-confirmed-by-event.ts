import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { RSVP, UseCase } from '@devmx/shared-api-interfaces';
import { RSVPsService } from '../services';

export class FindRSVPConfirmedByEventUseCase
  implements UseCase<string, RSVP[]>
{
  constructor(private rsvpsService: RSVPsService) {}

  async execute(event: string) {
    return this.rsvpsService.findConfirmedByEvent(event);
  }
}

export function provideFindRSVPConfirmedByEventUseCase() {
  return createUseCaseProvider(FindRSVPConfirmedByEventUseCase, [RSVPsService]);
}
