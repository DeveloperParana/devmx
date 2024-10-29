import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSelectCover } from './dialogs';
import { Provider } from '@angular/core';

export const eventFeatureAdminProviders: Provider[] = [
  provideSelectCover(),
  provideDialog(),
];
