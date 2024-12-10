import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { RSVP, UseCase } from '@devmx/shared-api-interfaces';
import { CreateRSVP } from '../../lib/dtos';
import { RSVPsService } from '../services';

export class CreateRSVPUseCase implements UseCase<CreateRSVP, RSVP> {
  constructor(private rsvpsService: RSVPsService) {}

  execute({ user: account, event, status }: CreateRSVP) {
    return this.rsvpsService.create(account, event, status);
  }
}

export function provideCreateRSVPUseCase() {
  return createUseCaseProvider(CreateRSVPUseCase, [RSVPsService]);
}
