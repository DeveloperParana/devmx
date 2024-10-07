import { Component, DestroyRef, inject, OnInit, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LocationFilter } from '@devmx/location-data-access';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterLocationForm } from '../../forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'devmx-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrl: './filter-location.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
  ],
  standalone: true,
})
export class FilterLocationComponent implements OnInit {
  #destroyRef = inject(DestroyRef);

  valueChange = output<LocationFilter>();

  form = new FilterLocationForm();

  ngOnInit() {
    const valueChange$ = this.form.valueChanges.pipe(
      takeUntilDestroyed(this.#destroyRef),
      debounceTime(300)
    );

    valueChange$.subscribe(() => {
      this.valueChange.emit(this.form.getRawValue());
    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'km';
    }

    return `${value}m`;
  }
}
