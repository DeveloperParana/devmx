import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { FormOption } from '@devmx/shared-ui-global/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'devmx-presentation-filter',
  templateUrl: './presentation-filter.component.html',
  styleUrl: './presentation-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChipsModule],
})
export class PresentationFilterComponent {
  filterChange = output<PresentationFormat>();

  formats: FormOption<PresentationFormat>[] = [
    { value: 'talk', viewValue: 'Palestra' },
    { value: 'workshop', viewValue: 'Oficina' },
    { value: 'webinar', viewValue: 'Seminário' },
  ];
}
