import { Directive, HostListener } from '@angular/core';
import {
  NgControl,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export function invalidTimeValidator(timeRegExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const invalid = timeRegExp.test(control.value);
    return invalid ? null : { invalidTime: { value: control.value } };
  };
}

@Directive({
  selector: 'input[devmxTime]',
  standalone: true,
})
export class TimeDirective {
  constructor(public ngControl: NgControl) {}

  @HostListener('input', ['$event.target'])
  onInput(target: HTMLInputElement) {
    let value = target.value.replace(/\D/g, '');

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    if (value.length >= 3) {
      value = `${value.slice(0, 2)}:${value.slice(2)}`;
    }

    this.#setValue(value);
  }

  @HostListener('blur', ['$event.target'])
  onBlur(target: HTMLInputElement) {
    if (target.value.length == 2) {
      this.#setValue(`${target.value}:00`);
    }
  }

  #setValue(value: string) {
    if (this.ngControl.control) {
      this.ngControl.control.setValue(value, { emitEvent: false });
    }
  }
}
