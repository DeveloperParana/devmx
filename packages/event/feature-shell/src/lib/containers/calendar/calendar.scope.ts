import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  template: `<router-outlet />`,
  imports: [RouterOutlet],
  standalone: true,
})
export class CalendarScope {}
