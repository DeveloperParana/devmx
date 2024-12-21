import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { DateRange, EventDateRangeForm } from './event-date-range';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'devmx-event-date-range',
  templateUrl: 'event-date-range.component.html',
  styleUrl: 'event-date-range.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule],
})
export class EventDateRangeComponent {
  rangeChange = output<DateRange>();

  readonly form = new EventDateRangeForm();

  constructor() {
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      if (value.start instanceof Date && value.end instanceof Date) {
        this.rangeChange.emit(this.form.getRawValue());
      }
    });
  }
}
