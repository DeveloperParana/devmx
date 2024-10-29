import { Dialog } from '@angular/cdk/dialog';
import { SelectCover } from './select-cover';

export function provideSelectCover() {
  return {
    provide: SelectCover,
    deps: [Dialog],
  };
}
