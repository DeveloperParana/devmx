import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideListItemDialog } from './dialogs';
import { Provider } from '@angular/core';

export const presentationFeatureAdminProviders: Provider[] = [
  provideFormDialog(),
  provideListItemDialog(),
  provideDialog()
];
