import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { inject, Component, ChangeDetectorRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideUserSocial, UserSocial } from '../../../dialogs';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { SocialIconComponent } from '../../../components';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { UserForm } from '../../../forms';
import { take } from 'rxjs';

@Component({
  selector: 'devmx-account-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  providers: [provideUserSocial()],
  imports: [
    ReactiveFormsModule,
    SocialIconComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    IconComponent,
  ],
})
export class SocialComponent {
  container = inject(ControlContainer);

  cdr = inject(ChangeDetectorRef);

  userSocial = inject(UserSocial);

  get form() {
    return this.container.control as UserForm;
  }

  addSocial() {
    const items = this.form.social.getRawValue();
    this.userSocial
      .open({ items })
      .afterClosed()
      .pipe(take(1))
      .subscribe((item) => {
        if (item) {
          this.form.social.add(item);
          this.cdr.detectChanges();
        }
      });
  }
}
