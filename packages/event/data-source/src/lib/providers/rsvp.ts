import { provideRSVPsMongoService } from '../infrastructure';
import { provideRSVPsFacade } from '../application';
import {
  provideCreateRSVPUseCase,
  provideFindRSVPByEventUseCase,
  provideFindRSVPConfirmedByEventUseCase,
} from '@devmx/event-domain/server';

export function provideRSVP() {
  return [
    provideRSVPsMongoService(),

    provideCreateRSVPUseCase(),
    provideFindRSVPByEventUseCase(),
    provideFindRSVPConfirmedByEventUseCase(),

    provideRSVPsFacade(),
  ];
}
