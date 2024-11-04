import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  template: ``,
  selector: 'devmx-sign-out',
  standalone: true,
})
export class SignOutContainer implements OnInit {
  authFacade = inject(AuthenticationFacade);
  layoutFacade = inject(LayoutFacade);

  ngOnInit() {
    this.authFacade.signOut();
    this.layoutFacade.resetNavLinks();
  }
}
