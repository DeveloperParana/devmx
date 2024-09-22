import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { providePresentation } from '@devmx/presentation-data-access';
import { Route } from '@angular/router';

export const presentationFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [...providePresentation()],
    component: PresentationFeatureShellComponent,
  },
];
