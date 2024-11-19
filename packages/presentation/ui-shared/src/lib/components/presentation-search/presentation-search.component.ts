import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { PresentationSearch, PresentationSearchForm } from '../../forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'devmx-presentation-search',
  templateUrl: './presentation-search.component.html',
  styleUrl: './presentation-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class PresentationSearchComponent {
  form = new PresentationSearchForm();

  valueChange = output<PresentationSearch>();

  constructor() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(), debounceTime(300))
      .subscribe(() => {
        const value = this.form.getRawValue();
        this.valueChange.emit(value);
      });
  }
}
