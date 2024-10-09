import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-calendar-scope',
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  standalone: true,
})
export class CalendarScope {}
