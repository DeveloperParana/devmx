import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SignInComponent, SignUpComponent } from './components';
import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthFacade } from '../accounts';
import { Router } from '@angular/router';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-auth',
  templateUrl: './auth.container.html',
  styleUrl: './auth.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatTabsModule, SignInComponent, SignUpComponent],
  standalone: true,
})
export class AuthContainer implements OnInit {
  authFacade = inject(AuthFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  ngOnInit() {
    this.authFacade.connected$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((connected) => {
        if (connected) this.router.navigate(['/']);
      });
  }

  onSignIn(data: SignIn) {
    console.log(data);
    this.authFacade.signIn(data);
  }

  onSignUp(data: SignUp) {
    console.log(data);
    this.authFacade.signUp(data);
  }
}
