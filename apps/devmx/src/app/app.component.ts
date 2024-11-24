import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

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
})
export class AppComponent {}
