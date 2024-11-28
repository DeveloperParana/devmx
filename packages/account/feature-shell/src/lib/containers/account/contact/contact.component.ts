import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from '@devmx/shared-ui-global/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserForm } from '../../../forms';

@Component({
  selector: 'devmx-account-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  providers: [],
  imports: [
    ReactiveFormsModule,
    PhoneMaskDirective,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ContactComponent {
  container = inject(ControlContainer);

  get form() {
    return this.container.control as UserForm;
  }
}
