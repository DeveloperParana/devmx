import { AutoAssignable, AutoAssinableRoleForm } from '../../forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBaseComponent } from '../base';

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
    IconComponent,
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
