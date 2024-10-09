import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { KeyValuePipe } from '@angular/common';
import { Dropdown } from '../../fields';

@Component({
  selector: 'devmx-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    KeyValuePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DropdownComponent<T> {
  field = input.required<Dropdown<T>>();

  control = input.required<FormControl<T>>();
}
