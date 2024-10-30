import { Provider } from '@angular/core';
import { provideDialog } from '@devmx/shared-ui-global/dialog';

export const accountFeatureAdminProviders: Provider[] = [provideDialog()];
