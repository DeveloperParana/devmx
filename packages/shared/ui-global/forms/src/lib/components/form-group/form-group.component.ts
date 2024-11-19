import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TextboxComponent } from '../textbox/textbox.component';
import { FormField, TypedFields, TypedForm } from '../../types';
import { SliderComponent } from '../slider/slider.component';
import { RadioComponent } from '../radio/radio.component';
import { RangeComponent } from '../range/range.component';
import { KeyValuePipe } from '@angular/common';
import { OrderByPipe } from '../../pipes';
import { debounceTime } from 'rxjs';
import {
  input,
  output,
  OnInit,
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'devmx-form-group',
    templateUrl: './form-group.component.html',
    styleUrl: './form-group.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        TextboxComponent,
        DropdownComponent,
        CheckboxComponent,
        DatepickerComponent,
        RadioComponent,
        SliderComponent,
        KeyValuePipe,
        OrderByPipe
    ]
})
export class FormGroupComponent<T = object> implements OnInit {
  #destroyRef = inject(DestroyRef);

  fields = input.required<TypedFields<T>>();

  formGroup = input.required<FormGroup<TypedForm<T>>>();

  valueChanges = output<T>();

  getControl<K extends keyof T>(name: string) {
    return this.formGroup().get(name) as FormControl<T[K]>;
  }

  getGroup(name: string) {
    return this.formGroup().get(name) as FormGroup;
  }

  isFormField(field: object): field is FormField {
    return 'kind' in field;
  }

  ngOnInit() {
    this.formGroup()
      .valueChanges.pipe(
        debounceTime(300),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe(() => {
        const value = this.formGroup().getRawValue();
        this.valueChanges.emit(value as T);
      });
  }
}
