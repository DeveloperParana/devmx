import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  radio,
  TypedFields,
  createFormGroup,
  FormGroupComponent,
} from '@devmx/shared-ui-global/forms';

interface EventFilter {
  format: EventFormat;
  // title: string;
  // city: boolean;
}

@Component({
  selector: 'devmx-event-filter',
  template: `<devmx-form-group
    [fields]="fields"
    [formGroup]="form"
    (valueChanges)="onFilterChange($event)"
  />`,
  styleUrl: './event-filter.component.scss',
  imports: [ReactiveFormsModule, FormGroupComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EventFilterComponent {
  router = inject(Router);

  fields: TypedFields<EventFilter> = {
    format: radio({
      order: 1,
      value: '',
      label: 'Formato',
      options: [
        { value: '', text: 'Todos' },
        { value: 'in-person', text: 'Presencial' },
        { value: 'online', text: 'Online' },
        { value: 'mixed', text: 'Híbrido' },
      ],
    }),
    // city: checkbox({
    //   order: 2,
    //   label: 'Na sua cidade',
    //   value: false,
    // }),
  };

  form = createFormGroup(this.fields);

  onFilterChange(queryParams: EventFilter) {
    this.router.navigate([], { queryParams });
  }
}
