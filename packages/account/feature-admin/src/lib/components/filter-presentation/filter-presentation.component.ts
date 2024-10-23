import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  output,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FilterPresentation } from '@devmx/account-data-access';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPresentationForm } from '../../forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'devmx-filter-presentation',
  templateUrl: './filter-presentation.component.html',
  styleUrl: './filter-presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    IconComponent,
  ],
  standalone: true,
})
export class FilterPresentationComponent implements OnInit {
  #destroyRef = inject(DestroyRef);

  form = new FilterPresentationForm();

  valueChange = output<FilterPresentation>();

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
