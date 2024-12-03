import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { debounceTime, skip } from 'rxjs';
import {
  FormGroup,
  ControlContainer,
  ReactiveFormsModule,
  FormGroupDirective,
} from '@angular/forms';
import {
  input,
  inject,
  output,
  Component,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-auto-save-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button mat-flat-button [disabled]="saving()">
      {{ saving() ? 'Salvando...' : 'Salvar' }}
    </button>
  `,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  imports: [ReactiveFormsModule, MatButtonModule],
})
export class AutoSaveButtonComponent<T> implements AfterViewInit {
  container = inject(ControlContainer);

  get form() {
    return this.container.control as FormGroup<TypedForm<T>>;
  }

  destroyRef = inject(DestroyRef);

  saving = input.required<boolean>();

  autoSave = output<T>();

  ngAfterViewInit() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(4000), skip(1))
      .subscribe(() => this.autoSave.emit(this.form.getRawValue() as T));
  }
}
