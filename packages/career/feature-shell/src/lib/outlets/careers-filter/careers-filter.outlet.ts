import { Router, RouterModule } from '@angular/router';
import { FilterJob } from '@devmx/career-data-access';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import {
  textbox,
  radio,
  TypedFields,
  createFormGroup,
  FormGroupComponent,
} from '@devmx/shared-ui-global/forms';

@Component({
  selector: 'devmx-careers-filter',
  templateUrl: './careers-filter.outlet.html',
  styleUrl: './careers-filter.outlet.scss',
  imports: [ReactiveFormsModule, FormGroupComponent, RouterModule],
  standalone: true,
})
export class CareersFilterOutlet {
  router = inject(Router);

  fields: TypedFields<FilterJob> = {
    title: textbox({
      label: 'Buscar vaga',
      type: 'text',
      order: 1,
    }),
    experience: radio({
      order: 2,
      label: 'Experiência',
      options: [
        { value: '', text: 'Todas' },
        { value: 'junior', text: 'Junior' },
        { value: 'mid', text: 'Plano' },
        { value: 'senior', text: 'Senior' },
      ],
    }),
    contract: radio({
      order: 3,
      label: 'Contrato',
      options: [
        { value: '', text: 'Todos' },
        { value: 'CLT', text: 'CLT' },
        { value: 'PJ', text: 'PJ' },
      ],
    }),
    mode: radio({
      order: 4,
      label: 'Regime',
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
