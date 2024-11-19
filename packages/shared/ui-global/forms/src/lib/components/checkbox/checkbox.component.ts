import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Checkbox } from '../../fields';

@Component({
    selector: 'devmx-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.scss',
    imports: [ReactiveFormsModule, MatCheckboxModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent<T> {
  field = input.required<Checkbox<T>>();

  control = input.required<FormControl<T>>();
}
