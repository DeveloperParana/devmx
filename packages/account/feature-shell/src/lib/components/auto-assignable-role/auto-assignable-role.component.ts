import { AutoAssignable, AutoAssinableRoleForm } from '../../forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBaseComponent } from '../base';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-auto-assignable-role',
  exportAs: 'devmxAutoAssignableRole',
  templateUrl: './auto-assignable-role.component.html',
  styleUrl: './auto-assignable-role.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  standalone: true,
})
export class AutoAssignableRoleComponent extends FormBaseComponent<AutoAssignable> {
  form = new AutoAssinableRoleForm();

  disable() {
    if (this.form.enabled) {
      this.form.disable();
    }
  }
}
