import { provideSelectUser } from '@devmx/account-ui-shared';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { Provider } from '@angular/core';
import {
  provideEventRSVP,
  provideSearchPresentations,
  provideSelectCover,
} from './dialogs';

export const eventFeatureAdminProviders: Provider[] = [
  provideSearchPresentations(),
  provideSelectUser(),
  provideSelectCover(),
  provideEventRSVP(),
  provideDialog(),
];
