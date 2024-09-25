import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SignInComponent, SignUpComponent } from './components';
import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { AccountFacade, AuthFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { take, timer } from 'rxjs';
import {
  inject,
  OnInit,
  Component,
  viewChild,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-account-feature-auth',
  templateUrl: './account-feature-auth.component.html',
  styleUrl: './account-feature-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatTabsModule, SignInComponent, SignUpComponent],
  standalone: true,
})
export class AccountFeatureAuthComponent implements OnInit {
  authFacade = inject(AuthFacade);
  accountFacade = inject(AccountFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  signInChild = viewChild(SignInComponent);
  signUpChild = viewChild(SignUpComponent);

  get signIn() {
    return this.signInChild();
  }

  get signUp() {
    return this.signUpChild();
  }

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
      if (!this.signUp || username === null) return;
      console.log(username);

      this.signUp.form.setUsernameError(!!username);
    });
  }

  onTabChange(value: MatTabChangeEvent) {
    if (!this.signIn || !this.signUp) return;

    const auth = [this.signIn, this.signUp];

    const timer$ = timer(400).pipe(take(1));
    timer$.subscribe(() => auth[value.index].focus());
  }

  onUsernameChange(username: string) {
    if (!this.signUp || !username) return;
    this.signUp.form.checkingUsername.set(true);
    this.accountFacade.checkUsername(username);
  }

  onSignIn(data: SignIn) {
    this.authFacade.signIn(data);
  }

  onSignUp(data: SignUp) {
    this.authFacade.signUp(data);
  }
}
