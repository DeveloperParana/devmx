import { UserSocial as UserSocialItem } from '@devmx/shared-api-interfaces';
import { UserSocialDialog } from './user-social.dialog';
import { UserSocialData } from './user-social-data';
import { MatDialog } from '@angular/material/dialog';

export class UserSocial {
  constructor(private dialog: MatDialog) {}

  open(data: UserSocialData) {
    return this.dialog.open<UserSocialDialog, UserSocialData, UserSocialItem>(
      UserSocialDialog,
      { data }
    );
  }
}

export function provideUserSocial() {
  return {
    provide: UserSocial,
    deps: [MatDialog],
  };
}
