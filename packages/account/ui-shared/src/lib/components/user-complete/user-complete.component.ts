import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { UserRef } from '@devmx/shared-api-interfaces';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';

export abstract class UserCompleteService {
  abstract complete(value: string): Observable<UserRef[]>;
}

@Component({
    selector: 'devmx-user-complete',
    templateUrl: './user-complete.component.html',
    styleUrl: './user-complete.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        AsyncPipe,
    ]
})
export class UserCompleteComponent {
  service = inject(UserCompleteService);

  control = new FormControl<UserRef | string>('');

  filtered$: Observable<UserRef[]>;

  constructor() {
    this.filtered$ = this.control.valueChanges.pipe(
      debounceTime(600),
      filter((value) => typeof value === 'string'),
      switchMap((value) => this.service.complete(value))
    );
  }

  displayFn(user: UserRef) {
    return user && user.name ? user.displayName : '';
  }
}
