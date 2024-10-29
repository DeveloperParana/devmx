import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { AccountSearch, AccountSearchForm } from '../../forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'devmx-account-search',
  templateUrl: './account-search.component.html',
  styleUrl: './account-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  standalone: true,
})
export class AccountSearchComponent {
  form = new AccountSearchForm();

  valueChange = output<AccountSearch>();

  constructor() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(), debounceTime(300))
      .subscribe(() => {
        const value = this.form.getRawValue();
        this.valueChange.emit(value);
      });
  }
}
