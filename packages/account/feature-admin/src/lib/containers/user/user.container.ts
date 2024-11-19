import { UserRolesComponent, UserRolesForm } from '@devmx/account-ui-shared';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '@devmx/shared-ui-global';
import { UserFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'devmx-admin-user',
    templateUrl: './user.container.html',
    styleUrl: './user.container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        UserRolesComponent,
        MatButtonModule,
        MatCardModule,
        RouterModule,
        AsyncPipe,
    ]
})
export class UserContainer {
  route = inject(ActivatedRoute);

  userFacade = inject(UserFacade);

  messageService = inject(MessageService);

  form = new UserRolesForm();

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ user }) => {
      if (user) this.form.patchValue(user);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      this.userFacade.updateRoles(value);

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
