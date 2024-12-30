import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchUserExceptPipe } from './search-user-except.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User, UserRef } from '@devmx/shared-api-interfaces';
import { MatInputModule } from '@angular/material/input';
import { UserFacade } from '@devmx/account-data-access';
import { debounceTime, filter, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  input,
  inject,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    SearchUserExceptPipe,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
  ],
})
export class SearchUserComponent {
  userFacade = inject(UserFacade);

  selected = output<User>();

  label = input('Usuário');

  hint = input('');

  control = new FormControl<string | User>('');

  except = input<UserRef[]>([]);

  constructor() {
    this.control.valueChanges
      .pipe(
        startWith(' '),
        filter((value) => typeof value === 'string'),
        filter((value) => value.length > 0),
        takeUntilDestroyed(),
        debounceTime(400)
      )
      .subscribe((displayName) => {
        this.userFacade.setFilter({ displayName });
        this.userFacade.load();
      });
  }

  displayFn(user: User) {
    return user && user.displayName ? user.displayName : '';
  }

  onOptionSelected(user: User) {
    this.selected.emit(user);
    this.control.setValue('');
  }
}
