import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FilterJob } from '@devmx/career-data-access';
import { ReactiveFormsModule } from '@angular/forms';
import {
  radio,
  TypedFields,
  createFormGroup,
  FormGroupComponent,
} from '@devmx/shared-ui-global/forms';

@Component({
  selector: 'devmx-job-filter',
  template: `<devmx-form-group
    [fields]="fields"
    [formGroup]="form"
    (valueChanges)="onFilterChange($event)"
  />`,
  styleUrl: './job-filter.component.scss',
  imports: [ReactiveFormsModule, FormGroupComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class JobFilterComponent {
  router = inject(Router);

  fields: TypedFields<FilterJob> = {
    experience: radio({
      order: 2,
      value: '',
      label: 'Experiência',
      options: [
        { value: '', text: 'Todas' },
        { value: 'internship', text: 'Estágio' },
        { value: 'junior', text: 'Junior' },
        { value: 'mid', text: 'Plano' },
        { value: 'senior', text: 'Senior' },
      ],
    }),
    contract: radio({
      order: 3,
      label: 'Contrato',
      value: '',
      options: [
        { value: '', text: 'Todos' },
        { value: 'CLT', text: 'CLT' },
        { value: 'PJ', text: 'PJ' },
      ],
    }),
    mode: radio({
      order: 4,
      label: 'Regime',
      value: '',
      options: [
        { value: '', text: 'Todos' },
        { value: 'remote', text: 'Remoto' },
        { value: 'hybrid', text: 'Híbrido' },
        { value: 'office', text: 'Presencial' },
      ],
    }),
  };

  form = createFormGroup(this.fields);

  onFilterChange(queryParams: FilterJob) {
    this.router.navigate([], { queryParams });
  }
}
