import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-event',
  templateUrl: './event.container.html',
  styleUrl: './event.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class EventContainer {}
