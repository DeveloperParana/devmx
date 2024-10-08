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
import { FilterAccount } from '@devmx/account-data-access';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterAccountForm } from '../../forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'devmx-filter-account',
  templateUrl: './filter-account.component.html',
  styleUrl: './filter-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  standalone: true,
})
export class FilterAccountComponent implements OnInit {
  #destroyRef = inject(DestroyRef);

  form = new FilterAccountForm();

  valueChange = output<FilterAccount>();

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
