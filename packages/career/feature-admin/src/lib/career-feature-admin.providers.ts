import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSkillDialog } from './dialogs';
import { Provider } from '@angular/core';

export const careerFeatureAdminProviders: Provider[] = [
  provideSkillDialog(),
  provideFormDialog(),
  provideDialog(),
];
