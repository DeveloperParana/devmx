import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { debounceTime, skip, take, timer } from 'rxjs';
import {
  FormGroup,
  ControlContainer,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  signal,
  inject,
  output,
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  DestroyRef,
} from '@angular/core';

@Component({
  selector: 'devmx-auto-save-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      mat-flat-button
      [disabled]="state()"
      (click)="onClick()"
    >
      {{ state() ? state() : 'Salvar' }}
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

  destroyRef = inject(DestroyRef);

  get form() {
    return this.container.control as FormGroup<TypedForm<T>>;
  }

  state = signal<string | null>(null);

  clicked = output<T>();

  ngAfterViewInit() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(4000), skip(1))
      .subscribe(() => this.onClick());
  }

  onClick() {
    const timer$ = timer(1000).pipe(take(1));

    if (this.form.valid) {
      this.state.set('Salvando...');

      this.clicked.emit(this.form.getRawValue() as T);

      return timer$.subscribe(() => this.state.set(null));
    }

    this.form.markAllAsTouched();

    return timer$.subscribe(() => this.state.set(null));
  }
}
