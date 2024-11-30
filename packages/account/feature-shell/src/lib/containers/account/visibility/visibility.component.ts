import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserForm } from '../../../forms';

@Component({
  selector: 'devmx-account-visibility',
  templateUrl: './visibility.component.html',
  styleUrl: './visibility.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  providers: [],
  imports: [ReactiveFormsModule, MatCheckboxModule],
})
export class VisibilityComponent {
  container = inject(ControlContainer);

  get form() {
    return this.container.control as UserForm;
  }
}
