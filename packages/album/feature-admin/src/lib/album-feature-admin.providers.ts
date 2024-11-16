import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSelectUser } from '@devmx/account-ui-shared';
import { provideSheet } from '@devmx/shared-ui-global/sheet';
import { Provider } from '@angular/core';

export const albumFeatureAdminProviders: Provider[] = [
  provideSelectUser(),
  provideDialog(),
  provideSheet(),
];
