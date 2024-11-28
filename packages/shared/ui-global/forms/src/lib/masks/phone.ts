import { Directive, HostListener } from '@angular/core';
import {
  NgControl,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export function invalidPhoneValidator(phoneRegExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || control.value.trim() === '') {
      return null;
    }
    const invalid = phoneRegExp.test(control.value);
    return invalid ? null : { invalidPhone: { value: control.value } };
  };
}

@Directive({
  selector: 'input[devmxPhone]',
  standalone: true,
})
export class PhoneMaskDirective {
  private previousValue = ''; // Armazena o valor anterior para comparação

  constructor(public ngControl: NgControl) {}

  @HostListener('input', ['$event.target'])
  onInput(target: HTMLInputElement) {
    const rawValue = target.value.replace(/\D/g, ''); // Remove todos os não-numéricos
    let formattedValue = '';

    // Aplica a máscara condicionalmente
    if (rawValue.length > 10) {
      formattedValue = rawValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (rawValue.length > 6) {
      formattedValue = rawValue.replace(
        /(\d{2})(\d{4})(\d{0,4})/,
        '($1) $2-$3'
      );
    } else if (rawValue.length > 2) {
      formattedValue = rawValue.replace(/(\d{2})(\d{0,4})/, '($1) $2');
    } else if (rawValue.length > 0) {
      formattedValue = rawValue.replace(/(\d*)/, '($1');
    }

    // Permite apagar os caracteres da máscara
    if (target.value.length < this.previousValue.length) {
      // Se o usuário está apagando, não força a reformatagem imediata
      this.previousValue = target.value;
      return;
    }

    // Define o novo valor mascarado apenas se for diferente do atual
    if (formattedValue !== this.previousValue) {
      this.#setValue(formattedValue);
      this.previousValue = formattedValue;
    }
  }

  @HostListener('blur', ['$event.target'])
  onBlur(target: HTMLInputElement) {
    const rawValue = target.value.replace(/\D/g, '');
    if (rawValue.length === 2) {
      this.#setValue(`(${rawValue}) 0000-0000`);
    }
  }

  #setValue(value: string) {
    if (this.ngControl.control) {
      this.ngControl.control.setValue(value, { emitEvent: false });
    }
  }
}
