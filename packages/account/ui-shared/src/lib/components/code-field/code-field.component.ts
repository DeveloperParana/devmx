import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  Self,
  Optional,
  Component,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  NgControl,
  Validators,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'devmx-code-field',
  templateUrl: './code-field.component.html',
  styles: `
    :host {
      gap: 1em;
      display: flex;

      .code-field {
        width: 2.8em;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
})
export class CodeFieldComponent extends DefaultValueAccessor {
  get control() {
    return this.ngControl.control as FormControl;
  }

  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(renderer, elementRef, true);
    this.ngControl.valueAccessor = this;
  }

  form = {
    a: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    b: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    c: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    d: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  };

  focusWithin(value: string, next: HTMLInputElement) {
    if (value.length === 1) next.focus();
  }

  onPaste(event: ClipboardEvent, last: HTMLInputElement) {
    event.preventDefault();

    const code = event.clipboardData?.getData('text') ?? '';

    if (code.length === 4) {
      const [a, b, c, d] = code.split('');
      this.form.a.setValue(a);
      this.form.b.setValue(b);
      this.form.c.setValue(c);
      this.form.d.setValue(d);

      if (this.control) {
        this.control.setValue(code);
      }

      last.focus();
    }
  }
}
