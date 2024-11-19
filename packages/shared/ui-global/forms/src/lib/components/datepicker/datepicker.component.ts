import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { KeyValuePipe } from '@angular/common';
import { Datepicker } from '../../fields';

@Component({
    selector: 'devmx-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrl: './datepicker.component.scss',
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        KeyValuePipe,
    ],
    providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent<T> {
  field = input.required<Datepicker<T>>();

  control = input.required<FormControl<T>>();
}
