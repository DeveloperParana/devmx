import { AuthUserFacade, LayoutToolbar } from './toolbar';
import { Type } from '@devmx/shared-api-interfaces';

export function provideLayoutToolbar(service: Type<AuthUserFacade>) {
  return {
    provide: LayoutToolbar,
    useFactory(authUser: AuthUserFacade) {
      return new LayoutToolbar(authUser);
    },
    deps: [service],
  };
}
