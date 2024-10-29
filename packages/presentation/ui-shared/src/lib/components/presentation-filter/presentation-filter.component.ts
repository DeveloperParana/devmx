import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { PresentationFormatPipe } from '../../pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  radio,
  TypedFields,
  FormGroupComponent,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

interface PresentationFilter {
  format: PresentationFormat;
}

@Component({
  selector: 'devmx-presentation-filter',
  template: `<devmx-form-group
    [fields]="fields"
    [formGroup]="formGroup"
    (valueChanges)="onFilterChange($event)"
  />`,
  styleUrl: './presentation-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormGroupComponent,
    PresentationFormatPipe,
  ],
  standalone: true,
})
export class PresentationFilterComponent {
  router = inject(Router);

  fields: TypedFields<PresentationFilter> = {
    format: radio({
      label: 'Formato',
      value: '',
      options: [
        { value: '', text: 'Todos' },
        { value: 'talk', text: 'Palestra' },
        { value: 'workshop', text: 'Oficina' },
        { value: 'webinar', text: 'Seminário' },
      ],
    }),
  };

  formGroup = createFormGroup(this.fields);

  onFilterChange(queryParams: PresentationFilter) {
    this.router.navigate([], { queryParams });
  }
}
