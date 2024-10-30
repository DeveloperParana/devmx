import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { FormOption } from '@devmx/shared-ui-global/forms';
import { EventFormat } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrl: './event-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChipsModule],
  standalone: true,
})
export class EventFilterComponent {
  change = output<EventFormat>();

  formats: FormOption<EventFormat>[] = [
    { value: 'in-person', viewValue: 'Presencial' },
    { value: 'online', viewValue: 'Online' },
    { value: 'mixed', viewValue: 'Híbrido' },
  ];
}
