import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { AccountFacade, AuthFacade } from '@devmx/account-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SignInComponent, SignUpComponent } from './components';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInForm, SignUpForm } from './forms';
import { Router } from '@angular/router';
import { take, timer } from 'rxjs';
import {
  inject,
  signal,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-account-feature-auth',
  templateUrl: './account-feature-auth.component.html',
  styleUrl: './account-feature-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    SignInComponent,
    SignUpComponent,
  ],
  standalone: true,
})
export class AccountFeatureAuthComponent implements OnInit {
  authFacade = inject(AuthFacade);
  accountFacade = inject(AccountFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  signInForm = new SignInForm();
  signUpForm = new SignUpForm();

  localAuthenticator = signal(false);

  ngOnInit() {
    const auth$ = this.authFacade.connected$.pipe(
      takeUntilDestroyed(this.destroyRef)
    );

    const username$ = this.accountFacade.username$.pipe(
      takeUntilDestroyed(this.destroyRef)
    );

    auth$.subscribe((connected) => {
      if (connected) this.router.navigate(['/']);
    });

    username$.subscribe((username) => {
      if (username === null) return;
      console.log(username);

      this.signUpForm.setUsernameError(!!username);
    });
  }

  onTabChange(value: MatTabChangeEvent) {
    const auth = [this.signInForm, this.signUpForm];

    const timer$ = timer(400).pipe(take(1));
    timer$.subscribe(() => auth[value.index].focus());
  }

  onUsernameChange(username: string) {
    if (!username) return;
    this.signUpForm.checkingUsername.set(true);
    this.accountFacade.checkUsername(username);
  }

  onSignIn() {
    if (this.signInForm.valid) {
      const data = this.signInForm.getRawValue();
      return this.authFacade.signIn(data);
    }

    this.signInForm.markAllAsTouched();
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      const data = this.signUpForm.getRawValue();
      return this.authFacade.signUp(data);
    }

    this.signUpForm.markAllAsTouched();
  }
}
