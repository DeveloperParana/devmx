import { ReadMeDialogService } from './read-me-dialog';
import { HttpClient } from '@angular/common/http';
import { DialogFacade } from './dialog.facade';
import { Dialog } from '@angular/cdk/dialog';

export function provideDialog() {
  return {
    provide: DialogFacade,
    deps: [Dialog],
  };
}

export function provideReadMeDialog() {
  return {
    provide: ReadMeDialogService,
    deps: [HttpClient],
  };
}
