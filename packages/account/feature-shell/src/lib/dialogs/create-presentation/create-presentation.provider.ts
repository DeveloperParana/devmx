import { CreatePresentationService } from './create-presentation.service';
import { MatDialog } from '@angular/material/dialog';

export function provideCreatePresentation() {
  return {
    provide: CreatePresentationService,
    deps: [MatDialog],
  };
}
