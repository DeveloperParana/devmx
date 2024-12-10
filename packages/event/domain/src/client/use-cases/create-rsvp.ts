import { UseCase, RSVP, RSVPStatus } from '@devmx/shared-api-interfaces';
import { CreateRSVP } from '@devmx/shared-api-interfaces/client';
import { EventService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';

export class CreateRSVPUseCase implements UseCase<CreateRSVP, RSVP> {
  constructor(private eventService: EventService) {}

  execute({ event, status }: CreateRSVP) {
    return this.eventService.createRSVP(event, status as RSVPStatus);
  }
}

export function provideCreateRSVPUseCase() {
  return createUseCaseProvider(CreateRSVPUseCase, [EventService]);
}
