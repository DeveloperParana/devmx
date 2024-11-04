import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'devmx-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrl: './user-roles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  imports: [ReactiveFormsModule, MatCheckboxModule],
  standalone: true,
})
export class UserRolesComponent {
}
