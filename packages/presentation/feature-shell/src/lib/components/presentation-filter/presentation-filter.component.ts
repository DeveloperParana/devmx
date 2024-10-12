import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  radio,
  TypedFields,
  createFormGroup,
  FormGroupComponent,
} from '@devmx/shared-ui-global/forms';

interface PresentationFilter {
  format: PresentationFormat;
}

@Component({
  selector: 'devmx-presentation-filter',
  template: `<devmx-form-group
    [fields]="fields"
    [formGroup]="form"
    (valueChanges)="onFilterChange($event)"
  />`,
  styleUrl: './presentation-filter.component.scss',
  imports: [ReactiveFormsModule, FormGroupComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PresentationFilterComponent {
  router = inject(Router);

  fields: TypedFields<PresentationFilter> = {
    format: radio({
      order: 1,
      value: '',
      label: 'Formato',
      options: [
        { value: '', text: 'Todos' },
        { value: 'talk', text: 'Palestra' },
        { value: 'workshop', text: 'Oficina (workshop)' },
        { value: 'webinar', text: 'Webinar (seminário online)' },
      ],
    }),
  };

  form = createFormGroup(this.fields);

  onFilterChange(queryParams: PresentationFilter) {
    this.router.navigate([], { queryParams });
  }
}
