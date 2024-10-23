import { Component, inject } from '@angular/core';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';

@Component({
  selector: 'devmx-home',
  templateUrl: './home.container.html',
  styleUrl: './home.container.scss',
  imports: [],
  standalone: true,
})
export class HomeContainer {
  constructor() {
    const layout = inject(LayoutFacade);
    layout.setSidenav({ start: true });
  }
}
