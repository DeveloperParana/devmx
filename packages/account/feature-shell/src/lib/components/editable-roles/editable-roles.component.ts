import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { RolesForm } from '../../forms';

@Component({
  selector: 'devmx-editable-roles',
  templateUrl: './editable-roles.component.html',
  styleUrl: './editable-roles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatCheckboxModule],
  standalone: true,
})
export class EditableRolesComponent {
  // form = new RolesForm();
}
