import { provideDialog } from '@devmx/shared-ui-global/dialog';
import { Provider } from '@angular/core';
import {
  provideEventRSVP,
  provideSearchLeaders,
  provideSearchPresentations,
  provideSelectCover,
} from './dialogs';

export const eventFeatureAdminProviders: Provider[] = [
  provideSearchPresentations(),
  provideSearchLeaders(),
  provideSelectCover(),
  provideEventRSVP(),
  provideDialog(),
];
