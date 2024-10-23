import { ImageComponent, PhotoComponent } from '@devmx/shared-ui-global';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { AutoAssignable, UpdateAccountForm } from '../../forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { CityFacade } from '@devmx/location-data-access';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap, take } from 'rxjs';
import {
  AutocompleteCitiesComponent,
  AutocompleteCitiesService,
} from '@devmx/location-ui-forms';
import {
  AuthFacade,
  AccountFacade,
  ChangePassword,
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

@Component({
  selector: 'devmx-account-settings',
  templateUrl: './settings.container.html',
  styleUrl: './settings.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    IconComponent,
    MatCardModule,
    PhotoComponent,
    ImageComponent,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule,
    EditableAccountComponent,
    EditablePasswordComponent,
    AutoAssignableRoleComponent,
    AutocompleteCitiesComponent,
  ],
  providers: [],
  standalone: true,
})
export class SettingsContainer implements OnInit {
  authFacade = inject(AuthFacade);

  layoutFacade = inject(LayoutFacade);

  accountFacade = inject(AccountFacade);

  autocompleteCitiesService = inject(AutocompleteCitiesService);

  cityFacade = inject(CityFacade);

  destroyRef = inject(DestroyRef);

  dialog = inject(MatDialog);

  form = {
    updateAccount: new UpdateAccountForm(),
  };

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
    this.layoutFacade.setSidenav({ start: true });

    this.accountFacade.account$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((account) => {
        if (account) this.populate(account);
      });

    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user) {
          this.accountFacade.loadOne(user.id);

          if (this.autoAssignableRole) {
            this.autoAssignableRole.form.patchValue(user);
          }
        }
      });

    this.authFacade.loadAuthUser();

    this.autocompleteCitiesService.search$
      .pipe(
        switchMap((name) => {
          return name ? this.cityFacade.search(name) : [];
        })
      )
      .subscribe((cities) => {
        this.autocompleteCitiesService.setCities(cities);
      });
  }

  populate(account: AccountOut) {
    if (this.editableAccount) {
      this.form.updateAccount.patchValue(account);
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

  onAccountSubmit() {
    if (this.form.updateAccount.valid) {
      const value = this.form.updateAccount.getRawValue();
      this.accountFacade.update(value);
    }
  }

  onPasswordSubmitted(data: ChangePassword) {
    // this.accountFacade.changePassword(data);
  }

  onRolesSubmitted(data: AutoAssignable) {
    // this.accountFacade.update({ roles: data });
  }
}
