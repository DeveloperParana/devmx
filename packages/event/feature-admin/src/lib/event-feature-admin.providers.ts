import { provideSelectPresentation } from '@devmx/presentation-ui-shared';
import { provideEventRSVP, provideSelectCover } from './dialogs';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSelectUser } from '@devmx/account-ui-shared';
import { Provider } from '@angular/core';

export const eventFeatureAdminProviders: Provider[] = [
  provideSelectPresentation(),
  provideSelectUser(),
  provideSelectCover(),
  provideEventRSVP(),
  provideDialog(),
];
