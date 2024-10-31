import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideSelectAccount } from '@devmx/account-ui-shared';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSkillDialog } from './dialogs';
import { Provider } from '@angular/core';

export const careerFeatureAdminProviders: Provider[] = [
  provideSelectAccount(),
  provideSkillDialog(),
  provideFormDialog(),
  provideDialog(),
];
