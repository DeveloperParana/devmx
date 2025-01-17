import { FormArray, FormControl, Validators } from '@angular/forms';

export class TagsForm extends FormArray<FormControl<string>> {
  constructor() {
    super([], {
      validators: [Validators.required],
    });
  }

  add(value = '') {
    this.push(
      new FormControl(value, {
        nonNullable: true,
        validators: [Validators.required],
      })
    );
  }
}
