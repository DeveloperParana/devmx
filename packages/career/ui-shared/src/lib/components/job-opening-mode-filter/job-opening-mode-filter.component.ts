import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { JobMode } from '@devmx/shared-api-interfaces';
import { FormOption } from '@devmx/shared-ui-global/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'devmx-job-opening-mode-filter',
  templateUrl: './job-opening-mode-filter.component.html',
  styleUrl: './job-opening-mode-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChipsModule],
})
export class JobOpeningModeFilterComponent {
  change = output<JobMode>();

  modes: FormOption<JobMode>[] = [
    { value: 'remote', viewValue: 'Remoto' },
    { value: 'hybrid', viewValue: 'Híbrido' },
    { value: 'office', viewValue: 'Presencial' },
  ];
}
