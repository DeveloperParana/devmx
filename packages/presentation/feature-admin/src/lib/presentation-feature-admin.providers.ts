import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideListItemDialog } from './dialogs';
import { Provider } from '@angular/core';
import { provideSelectAccount } from '@devmx/account-ui-shared';

export const presentationFeatureAdminProviders: Provider[] = [
  provideListItemDialog(),
  provideSelectAccount(),
  provideFormDialog(),
  provideDialog(),
];
