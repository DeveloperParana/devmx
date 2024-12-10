import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { RSVP, UseCase } from '@devmx/shared-api-interfaces';
import { RSVPsService } from '../services';

export class FindRSVPByEventUseCase implements UseCase<string, RSVP[]> {
  constructor(private rsvpsService: RSVPsService) {}

  async execute(event: string) {
    return this.rsvpsService.findByEvent(event);
  }
}

export function provideFindRSVPByEventUseCase() {
  return createUseCaseProvider(FindRSVPByEventUseCase, [RSVPsService]);
}
