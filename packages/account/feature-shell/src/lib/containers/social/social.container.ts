import { AuthenticationFacade, UserFacade } from '@devmx/account-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { FormService } from '@devmx/shared-ui-global/forms';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '@devmx/shared-ui-global';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { socialDialog } from './social.dialog';
import { UpdateSocialForm } from '../../forms';
import { take } from 'rxjs';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'devmx-social',
    templateUrl: './social.container.html',
    styleUrl: './social.container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        IconComponent,
    ]
})
export class SocialContainer {
  userFacade = inject(UserFacade);

  cdr = inject(ChangeDetectorRef);

  authFacade = inject(AuthenticationFacade);

  messageService = inject(MessageService);

  dialog = socialDialog(inject(FormService));

  form = new UpdateSocialForm();

  constructor() {
    const social$ = this.userFacade.social$.pipe(takeUntilDestroyed());

    social$.subscribe((data) => {
      if (data) this.form.patch(data);
    });

    this.authFacade.auth$.pipe(takeUntilDestroyed()).subscribe((auth) => {
      if (auth) this.userFacade.loadOne(auth.id);
    });
  }

  add() {
    const dialog$ = this.dialog.open().pipe(take(1));

    dialog$.subscribe((social) => {
      if (social) this.form.social.add(social);
      this.cdr.detectChanges();
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.userFacade.updateSocial(this.form.getSocial());

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
