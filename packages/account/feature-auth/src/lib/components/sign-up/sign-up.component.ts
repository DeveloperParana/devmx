import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignUpForm } from '../../forms';
import {
  output,
  inject,
  OnInit,
  viewChild,
  Component,
  DestroyRef,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  standalone: true,
})
export class SignUpComponent implements OnInit {
  #destroyRef = inject(DestroyRef);

  container = inject(ControlContainer);
  get form() {
    return this.container.control as SignUpForm;
  }

  firstNameRef = viewChild<ElementRef<HTMLInputElement>>('firstName');
  get firstName() {
    return this.firstNameRef()?.nativeElement;
  }

  usernameChange = output<string>();

  ngOnInit() {
    this.form.focus$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((state) => {
        if (state && this.firstName) {
          this.firstName.focus();
        }
      });
  }
}
