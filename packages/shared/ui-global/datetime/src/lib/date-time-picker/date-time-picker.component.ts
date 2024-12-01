import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { DateTimePickerForm } from './date-time-picker.form';
import { MatInputModule } from '@angular/material/input';
import {
  Self,
  inject,
  Optional,
  Component,
  Renderer2,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  NgControl,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'devmx-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  standalone: true,
})
export class DateTimePickerComponent
  extends DefaultValueAccessor
  implements AfterViewInit
{
  get control() {
    return this.ngControl.control as FormControl<Date>;
  }

  readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);

  form = new DateTimePickerForm();

  constructor(
    renderer: Renderer2,
    readonly elRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(renderer, elRef, true);
    this.ngControl.valueAccessor = this;

    this._adapter.setLocale('pt-BR');
  }

  ngAfterViewInit() {
    if (!this.control.value) {
      this.control.setValue(new Date());
    }

    const { value } = this.control;

    this.form.setValue({ date: value, time: value }, { emitEvent: false });

    const { date, time } = this.form.controls;

    date.valueChanges.subscribe((d) => {
      const { value } = this.control;

      if (!d || !value) return;

      value.setDate(d.getDate());
      value.setMonth(d.getMonth());
      value.setFullYear(d.getFullYear());

      this.control.setValue(value);
    });

    time.valueChanges.subscribe((t) => {
      const { value } = this.control;
      if (!t || !value) return;

      value.setHours(t.getHours());
      value.setMinutes(t.getMinutes());
      value.setSeconds(t.getSeconds());

      this.control.setValue(value);
    });
  }
}
