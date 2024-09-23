import { MatExpansionModule } from '@angular/material/expansion';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {
  AuthFacade,
  AccountFacade,
  ChangePassword,
  UpdateAccount,
} from '@devmx/account-data-access';
import {
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
import { PhotoComponent } from '@devmx/shared-ui-global';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { take } from 'rxjs';

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
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    EditableAccountComponent,
    EditablePasswordComponent,
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

  ngOnInit() {
    this.accountFacade.account$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((account) => {
        if (this.editableAccount && account) {
          this.editableAccount.form.patchValue(account);
        }
      });

    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user) this.accountFacade.loadOne(user.id);
      });

    this.authFacade.loadAuthUser();
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
}
