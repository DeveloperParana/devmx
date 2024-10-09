import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'devmx-event-scope',
  template: `<router-outlet />`,
  imports: [RouterOutlet],
  standalone: true,
})
export class EventScope {}
