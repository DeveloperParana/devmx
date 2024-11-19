import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ExperienceLevel } from '@devmx/shared-api-interfaces';
import { FormOption } from '@devmx/shared-ui-global/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'devmx-job-opening-experience-filter',
    templateUrl: './job-opening-experience-filter.component.html',
    styleUrl: './job-opening-experience-filter.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatChipsModule]
})
export class JobOpeningExperienceFilterComponent {
  change = output<ExperienceLevel>();

  experiences: FormOption<ExperienceLevel>[] = [
    { value: 'internship', viewValue: 'Estágio' },
    { value: 'junior', viewValue: 'Junior' },
    { value: 'mid', viewValue: 'Pleno' },
    { value: 'senior', viewValue: 'Senior' },
  ];
}
