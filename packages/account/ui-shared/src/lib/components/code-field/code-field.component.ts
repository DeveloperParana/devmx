import { MatFormFieldModule } from '@angular/material/form-field';
import { UpperDirective } from '@devmx/shared-ui-global/forms';
import { MatInputModule } from '@angular/material/input';
import {
  Self,
  Optional,
  Component,
  Renderer2,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  NgControl,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';

@Component({
    exportAs: 'devmxCodeField',
    selector: 'devmx-code-field',
    templateUrl: './code-field.component.html',
    styleUrl: './code-field.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        UpperDirective,
    ]
})
export class CodeFieldComponent extends DefaultValueAccessor {
  private inputA = viewChild<ElementRef<HTMLInputElement>>('inputA');

  /**
   * Usado no componente pai para
   * dar foco no primeiro campo
   */
  get inputAElm() {
    return this.inputA()?.nativeElement;
  }

  get control() {
    return this.ngControl.control as FormControl;
  }

  constructor(
    renderer: Renderer2,
    readonly elRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(renderer, elRef, true);
    this.ngControl.valueAccessor = this;

    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        const { a, b, c, d } = this.form.getRawValue();
        this.control.setValue(`${a + b + c + d}`.toUpperCase());
      }
    });
  }

  form = new FormGroup({
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
  });

  onInput(current: HTMLInputElement, next?: HTMLInputElement) {
    if (current.value.length === 1 && next) next.focus();
  }

  onPaste(event: ClipboardEvent, last: HTMLInputElement) {
    event.preventDefault();

    const code = event.clipboardData?.getData('text') ?? '';

    if (code.length === 4) {
      const [a, b, c, d] = code.split('');

      this.form.controls.a.setValue(a);
      this.form.controls.b.setValue(b);
      this.form.controls.c.setValue(c);
      this.form.controls.d.setValue(d);

      last.focus();
    }
  }
}
