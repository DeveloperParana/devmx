import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFacade } from './accounts';

@Component({
  selector: 'devmx-root',
  template: `<router-outlet />`,
  styles: `:host { height: 100%; display: flex; flex-direction: column; }`,
  imports: [RouterModule],
  standalone: true,
})
export class AppComponent implements OnInit {
  authFacade = inject(AuthFacade);

  ngOnInit() {
    this.authFacade.loadAuthUser();
  }
}
