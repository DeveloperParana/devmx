import { MatDialog } from '@angular/material/dialog';
import { FormService } from './form.service';

export function provideFormDialog() {
  return {
    provide: FormService,
    deps: [MatDialog],
  };
}
