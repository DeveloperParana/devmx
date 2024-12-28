import { TagUserComponent } from './tag-user.component';
import { UserRef } from '@devmx/shared-api-interfaces';
import { Overlay } from '@angular/cdk/overlay';
import { Dialog } from '@angular/cdk/dialog';

export class TagUserService {
  constructor(private overlay: Overlay, private dialog: Dialog) {}

  open(target: HTMLElement, offsetX = 0, offsetY = 0) {
    const panelClass = 'tag-user-position';

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(target)
      .withPositions([
        {
          overlayX: 'center',
          overlayY: 'top',
          originX: 'start',
          originY: 'top',
          panelClass,
          offsetX,
          offsetY,
        },
      ]);

    return this.dialog.open<UserRef, void, TagUserComponent>(TagUserComponent, {
      positionStrategy,
    });
  }
}

export function provideTagUserService() {
  return {
    provide: TagUserService,
    deps: [Overlay, Dialog],
  };
}
