import { FormService, createFormGroup } from '@devmx/shared-ui-global/forms';
import { ImageComponent, PhotoComponent } from '@devmx/shared-ui-global';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { CityFacade } from '@devmx/location-data-access';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap, take } from 'rxjs';
import {
  AutoAssignable,
  changePassword,
  updateAccount,
  UpdateAccountForm,
  UpdateAccountWithCity,
} from '../../forms';
import {
  AutocompleteCitiesComponent,
  AutocompleteCitiesService,
} from '@devmx/location-ui-forms';
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

@Component({
  selector: 'devmx-account-settings',
  templateUrl: './settings.container.html',
  styleUrl: './settings.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
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
    AutocompleteCitiesComponent,
  ],
  providers: [],
  standalone: true,
})
export class SettingsContainer implements OnInit {
  authFacade = inject(AuthFacade);

  accountFacade = inject(AccountFacade);

  autocompleteCitiesService = inject(AutocompleteCitiesService);

  cityFacade = inject(CityFacade);

  destroyRef = inject(DestroyRef);

  formService = inject(FormService);

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
          console.log(name);

          return name ? this.cityFacade.search(name) : [];
        })
      )
      .subscribe((cities) => {
        console.log(cities);

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

  openPassword(account: AccountOut) {
    const title = 'Alterar senha';

    const fields = changePassword(account);
    const form = createFormGroup<ChangePassword>(fields);

    const password$ = this.formService
      .open<ChangePassword>({ title, form, fields })
      .afterClosed();
    password$.pipe(take(1)).subscribe((result) => {
      console.log(result);
    });
  }

  openUpdateAccount(account: AccountOut) {
    const title = 'Alterar dados da conta';

    const fields = updateAccount(account);
    console.log(fields);

    const form = createFormGroup(fields);
    console.log(form);


    const account$ = this.formService
      .open({ title, fields, form })
      .afterClosed();

    // account$.pipe(take(1)).subscribe((result) => {
    //   console.log(result);
    // });
  }

  onAccountSubmitted(data: UpdateAccount | UpdateAccountWithCity) {
    if (data.city && typeof data.city === 'object') {
      data.city = data.city.id;
    }
    this.accountFacade.update(data as UpdateAccount);
  }

  onPasswordSubmitted(data: ChangePassword) {
    // this.accountFacade.changePassword(data);
  }

  onRolesSubmitted(data: AutoAssignable) {
    // this.accountFacade.changePassword(data);
  }
}
