import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[devmxTime]',
  standalone: true,
})
export class TimeDirective {
  constructor(private ngControl: NgControl) {}

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
