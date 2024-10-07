/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global';
import { debounceTime } from 'rxjs';
import {
  input,
  inject,
  OnInit,
  output,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  CheckboxComponent,
  DropdownComponent,
  TextboxComponent,
} from './components';
import {
  CheckboxFormField,
  DropdownFormField,
  TextboxFormField,
} from './form-field';

export type FormField<T = any> =
  | TextboxFormField<T>
  | CheckboxFormField<T>
  | DropdownFormField<T>;

@Component({
  selector: 'devmx-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    TextboxComponent,
    CheckboxComponent,
    DropdownComponent,
  ],
  standalone: true,
})
export class FilterComponent<T> implements OnInit {
  #destroyRef = inject(DestroyRef);

  fields = input.required<FormField[]>();

  formGroup = input.required<FormGroup<TypedForm<T>>>();

  filterChange = output<T>();

  ngOnInit() {
    this.formGroup()
      .valueChanges.pipe(
        debounceTime(300),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe(() => {
        const value = this.formGroup().getRawValue();
        this.filterChange.emit(value as T);
      });
  }
}
