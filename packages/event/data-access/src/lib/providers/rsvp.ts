import { provideRSVPFacade } from '../application';
import {
  provideCreateRSVPUseCase,
  provideFindRSVPByEventUseCase,
  provideFindRSVPConfirmedByEventUseCase,
} from '@devmx/event-domain/client';

export function provideRSVP() {
  return [
    provideCreateRSVPUseCase(),
    provideFindRSVPByEventUseCase(),

    provideFindRSVPConfirmedByEventUseCase(),

    provideRSVPFacade(),
  ];
}
