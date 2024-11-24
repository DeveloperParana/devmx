import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { Provider } from '@angular/core';
import {
  provideGithubFacade,
  provideHttpGithubService,
} from '@devmx/shared-data-access';

export const accountFeatureShellProviders: Provider[] = [
  provideHttpGithubService(),
  provideGithubFacade(),
  provideFormDialog(),
];
