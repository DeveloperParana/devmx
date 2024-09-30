import { Component, DestroyRef, inject, OnInit, output } from '@angular/core';
import { FilterEvent } from '@devmx/event-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterEventForm } from '../../forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'devmx-filter-event',
  templateUrl: './filter-event.component.html',
  styleUrl: './filter-event.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class FilterEventComponent implements OnInit {
  #destroyRef = inject(DestroyRef);

  form = new FilterEventForm();

  valueChange = output<FilterEvent>();

  ngOnInit() {
    const valueChange$ = this.form.valueChanges.pipe(
      takeUntilDestroyed(this.#destroyRef),
      debounceTime(300)
    );

    valueChange$.subscribe(() => {
      this.valueChange.emit(this.form.getRawValue());
    });
  }
}
