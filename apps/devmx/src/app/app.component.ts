import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'devmx-root',
  template: `<router-outlet />`,
  styles: `
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `,
  imports: [RouterOutlet],
  standalone: true,
})
export class AppComponent {}
