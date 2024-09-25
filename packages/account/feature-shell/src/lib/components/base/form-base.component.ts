import { Directive, OnInit, output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
export abstract class FormBaseComponent<T> implements OnInit {
  abstract form: FormGroup;

  submitted = output<T>();

  ngOnInit() {
    this.form.disable();
  }

  toggleForm(elementToFocus?: HTMLInputElement) {
    if (this.form.disabled) {
      this.form.enable();

      if (elementToFocus) {
        elementToFocus.focus();
      }
    } else {
      this.form.disable();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.getRawValue());
      return this.form.disable();
    }

    this.form.markAllAsTouched();
  }
}
