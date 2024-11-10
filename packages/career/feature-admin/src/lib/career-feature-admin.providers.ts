import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSelectUser } from '@devmx/account-ui-shared';
import { provideSkillDialog } from '@devmx/learn-ui-shared';
import { Provider } from '@angular/core';
import { EntityFacade } from '@devmx/shared-data-access';
import { SkillFacade } from '@devmx/learn-data-access';

export const careerFeatureAdminProviders: Provider[] = [
  {
    provide: EntityFacade,
    useExisting: SkillFacade,
  },
  provideSelectUser(),
  provideSkillDialog(),
  provideFormDialog(),
  provideDialog(),
];
