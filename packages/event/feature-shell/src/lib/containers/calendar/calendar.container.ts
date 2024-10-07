import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-calendar',
  templateUrl: './calendar.container.html',
  styleUrl: './calendar.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class CalendarContainer {}
