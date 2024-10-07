import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignInForm } from '../../forms';
import {
  inject,
  OnInit,
  Component,
  viewChild,
  ElementRef,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class SignInComponent implements OnInit {
  #destroyRef = inject(DestroyRef);

  usernameRef = viewChild<ElementRef<HTMLInputElement>>('username');
  get username() {
    return this.usernameRef()?.nativeElement;
  }

  container = inject(ControlContainer);
  get form() {
    return this.container.control as SignInForm;
  }

  ngOnInit() {
    this.form.focus$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((state) => {
        if (state && this.username) {
          this.username.focus();
        }
      });
  }
}
