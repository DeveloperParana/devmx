import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventPage } from '@devmx/shared-api-interfaces';
import {
  input,
  signal,
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-calendar-button',
  templateUrl: './calendar-button.component.html',
  styleUrl: './calendar-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, IconComponent],
})
export class CalendarButtonComponent implements AfterViewInit {
  data = input.required<EventPage>();

  text = input('Adicionar ao calendário');

  link = signal('');

  ngAfterViewInit() {
    const calendar = `https://calendar.google.com/calendar/render`;

    const normalized = this.#normalizeParams(this.data());

    const params = new URLSearchParams(normalized);

    this.link.set(`${calendar}?${params}`);
  }

  #normalizeParams(event: EventPage) {
    const action = 'TEMPLATE';

    const { title: text, address: location, description: details } = event;

    const start = this.#normalizeDate(event.start);
    const end = this.#normalizeDate(event.end);

    return { action, text, location, details, dates: `${start}/${end}` };
  }

  #normalizeDate(date: Date) {
    return date.toISOString().replace(/-|:|\.\d{3}/g, '');
  }
}
