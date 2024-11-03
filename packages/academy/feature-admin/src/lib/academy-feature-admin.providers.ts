import { provideSelectInstitution } from '@devmx/academy-ui-shared';
import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideSelectAccount } from '@devmx/account-ui-shared';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideInstitutionDialog, provideSubjectDialog } from './dialogs';
import { Provider } from '@angular/core';

export const academyFeatureAdminProviders: Provider[] = [
  provideSelectInstitution(),
  provideInstitutionDialog(),
  provideSelectAccount(),
  provideSubjectDialog(),
  provideFormDialog(),
  provideDialog(),
];
