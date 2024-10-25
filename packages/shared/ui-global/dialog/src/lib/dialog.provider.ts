import { DialogFacade } from './dialog.facade';
import { Dialog } from '@angular/cdk/dialog';

export function provideDialog() {
  return {
    provide: DialogFacade,
    deps: [Dialog],
  };
}
