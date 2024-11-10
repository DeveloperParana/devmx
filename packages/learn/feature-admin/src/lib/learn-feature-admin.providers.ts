import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSkillDialog } from '@devmx/learn-ui-shared';
import { Provider } from '@angular/core';

export const learnFeatureAdminProviders: Provider[] = [
  provideDialog(),
  provideSkillDialog(),
];
