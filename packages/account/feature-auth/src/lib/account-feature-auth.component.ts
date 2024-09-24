import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SignInComponent, SignUpComponent } from './components';
import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { AuthFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import {
  inject,
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
  imports: [MatCardModule, MatTabsModule, SignInComponent, SignUpComponent],
  standalone: true,
})
export class AccountFeatureAuthComponent implements OnInit {
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
    this.authFacade.signIn(data);
  }

  onSignUp(data: SignUp) {
    this.authFacade.signUp(data);
  }
}
