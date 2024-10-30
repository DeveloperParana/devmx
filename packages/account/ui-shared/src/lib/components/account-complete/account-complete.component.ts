import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { AccountRef } from '@devmx/shared-api-interfaces';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export abstract class AccountCompleteService {
  abstract complete(value: string): Observable<AccountRef[]>;
}

@Component({
  selector: 'devmx-account-complete',
  templateUrl: './account-complete.component.html',
  styleUrl: './account-complete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    IconComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class AccountCompleteComponent {
  service = inject(AccountCompleteService);

  control = new FormControl<AccountRef | string>('');

  filtered$: Observable<AccountRef[]>;

  constructor() {
    this.filtered$ = this.control.valueChanges.pipe(
      debounceTime(600),
      filter((value) => typeof value === 'string'),
      switchMap((value) => this.service.complete(value))
    );
  }

  displayFn(account: AccountRef) {
    return account && account.name
      ? `${account.name.first} ${account.name.last}`
      : '';
  }
}
