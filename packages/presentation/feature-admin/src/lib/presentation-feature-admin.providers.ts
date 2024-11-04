import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSelectUser } from '@devmx/account-ui-shared';
import { provideListItemDialog } from './dialogs';
import { Provider } from '@angular/core';

export const presentationFeatureAdminProviders: Provider[] = [
  provideListItemDialog(),
  provideSelectUser(),
  provideFormDialog(),
  provideDialog(),
];
