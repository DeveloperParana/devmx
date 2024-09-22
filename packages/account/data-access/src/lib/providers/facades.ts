import { AuthService, PresentationService } from '@devmx/account-domain/client';
import { AuthFacade, PresentationFacade } from '../facades';

export function provideAuthFacade() {
  return {
    provide: AuthFacade,
    useFactory(service: AuthService) {
      return new AuthFacade(service);
    },
    deps: [AuthService],
  };
}

export function providePresentationFacade() {
  return {
    provide: PresentationFacade,
    useFactory(service: PresentationService) {
      return new PresentationFacade(service);
    },
    deps: [PresentationService],
  };
}
