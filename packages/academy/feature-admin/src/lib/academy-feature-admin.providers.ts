import { provideInstitutionDialog, provideSubjectDialog } from './dialogs';
import { provideSelectInstitution } from '@devmx/academy-ui-shared';
import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { provideSelectUser } from '@devmx/account-ui-shared';
import { Provider } from '@angular/core';

export const academyFeatureAdminProviders: Provider[] = [
  provideSelectInstitution(),
  provideInstitutionDialog(),
  provideSelectUser(),
  provideSubjectDialog(),
  provideFormDialog(),
  provideDialog(),
];
