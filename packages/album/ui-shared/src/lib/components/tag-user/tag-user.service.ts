import { TagUserComponent } from './tag-user.component';
import { UserRef } from '@devmx/shared-api-interfaces';
import { TagUserOptions } from './tag-user-options';
import { Overlay } from '@angular/cdk/overlay';
import { TagUserData } from './tag-user-data';
import { Dialog } from '@angular/cdk/dialog';

export class TagUserService {
  constructor(private overlay: Overlay, private dialog: Dialog) {}

  open({ target, offsetX = 0, offsetY = 0, data }: TagUserOptions) {
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

    return this.dialog.open<UserRef, TagUserData, TagUserComponent>(
      TagUserComponent,
      { positionStrategy, data }
    );
  }
}

export function provideTagUserService() {
  return {
    provide: TagUserService,
    deps: [Overlay, Dialog],
  };
}
