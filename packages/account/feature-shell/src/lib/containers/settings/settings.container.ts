import { ImageComponent, PhotoComponent } from '@devmx/shared-ui-global';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import {
  AuthFacade,
  AccountFacade,
  ChangePassword,
  UpdateAccount,
} from '@devmx/account-data-access';
import {
  AutoAssignableRoleComponent,
  EditableAccountComponent,
  EditablePasswordComponent,
  EditablePhotoComponent,
} from '../../components';
import {
  inject,
  OnInit,
  viewChild,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AutoAssignable } from '../../forms';

@Component({
  selector: 'devmx-account-settings',
  templateUrl: './settings.container.html',
  styleUrl: './settings.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    PhotoComponent,
    ImageComponent,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    EditableAccountComponent,
    EditablePasswordComponent,
    AutoAssignableRoleComponent,
  ],
  standalone: true,
})
export class SettingsContainer implements OnInit {
  authFacade = inject(AuthFacade);

  accountFacade = inject(AccountFacade);

  destroyRef = inject(DestroyRef);

  dialog = inject(MatDialog);

  editableAccountChild = viewChild(EditableAccountComponent);
  get editableAccount() {
    return this.editableAccountChild();
  }

  editablePasswordChild = viewChild(EditablePasswordComponent);
  get editablePassword() {
    return this.editablePasswordChild();
  }

  autoAssignableRoleChild = viewChild(AutoAssignableRoleComponent);
  get autoAssignableRole() {
    return this.autoAssignableRoleChild();
  }

  ngOnInit() {
    this.accountFacade.account$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((account) => {
        if (account) this.populate(account);
      });

    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        console.log(user);

        if (user) {
          this.accountFacade.loadOne(user.id);

          if (this.autoAssignableRole) {
            this.autoAssignableRole.form.patchValue(user);
          }
        }
      });

    this.authFacade.loadAuthUser();
  }

  populate(account: AccountOut) {
    if (this.editableAccount) {
      this.editableAccount.form.patchValue(account);
    }
    if (this.editablePassword) {
      this.editablePassword.form.patchValue(account);
    }
  }

  changePhoto() {
    const dialogRef = this.dialog.open(EditablePhotoComponent);
    const photo$ = dialogRef.afterClosed().pipe(take(1));

    photo$.subscribe((photo) => {
      if (photo) this.accountFacade.uploadPhoto(photo);
    });
  }

  onAccountSubmitted(data: UpdateAccount) {
    this.accountFacade.update(data);
  }

  onPasswordSubmitted(data: ChangePassword) {
    this.accountFacade.changePassword(data);
  }

  onRolesSubmitted(data: AutoAssignable) {
    // this.accountFacade.changePassword(data);
  }
}
