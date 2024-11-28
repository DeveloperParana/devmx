import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserForm } from '../../../forms';

@Component({
  selector: 'devmx-account-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  providers: [],
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
})
export class UserComponent {
  container = inject(ControlContainer);

  get form() {
    return this.container.control as UserForm;
  }
}
