import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { FormOption } from '@devmx/shared-ui-global/forms';
import { EventFormat } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-event-time',
  templateUrl: './event-time.component.html',
  styleUrl: './event-time.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChipsModule],
})
export class EventTimeComponent {
  timeChange = output<EventFormat>();

  times: FormOption<'' | 'until'>[] = [
    { value: '', viewValue: 'Chegando' },
    { value: 'until', viewValue: 'Passados' },
  ];
}
