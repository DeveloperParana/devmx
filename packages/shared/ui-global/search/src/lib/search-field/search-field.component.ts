import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';
import {
  input,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'devmx-search-field',
    templateUrl: './search-field.component.html',
    styleUrl: './search-field.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
    ]
})
export class SearchFieldComponent {
  control = new FormControl('', {
    nonNullable: true,
  });

  debounce = input(200);

  searchChange = output<string>();

  constructor() {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(), debounceTime(this.debounce()))
      .subscribe((value) => this.searchChange.emit(value ?? ''));
  }
}
