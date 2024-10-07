import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { EventFacade, FilterEvent } from '@devmx/event-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FilterEventForm } from '../../forms';
import {
  CoverPipe,
  PhotoPipe,
  PageParams,
  PaginatorComponent,
} from '@devmx/shared-ui-global';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormField,
  FilterComponent,
  TextboxFormField,
  DropdownFormField,
} from '@devmx/shared-ui-global/filter';

@Component({
  selector: 'devmx-events',
  templateUrl: './events.container.html',
  styleUrl: './events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    PaginatorComponent,
    FilterComponent,
    RouterModule,
    PhotoPipe,
    AsyncPipe,
    DatePipe,
    CoverPipe,
  ],
  standalone: true,
})
export class EventsContainer implements OnInit {
  eventFacade = inject(EventFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  filterForm = new FilterEventForm();

  filterFields: FormField[] = [
    new TextboxFormField({
      order: 0,
      key: 'title',
      label: 'Título',
      controlType: 'text',
    }),
    new DropdownFormField<EventFormat | ''>({
      order: 1,
      key: 'format',
      label: 'Formato',
      options: [
        { value: '', viewValue: 'Todos' },
        { value: 'in-person', viewValue: 'Presencial' },
        { value: 'online', viewValue: 'Online' },
        { value: 'mixed', viewValue: 'Híbrido' },
      ],
    }),
  ];

  ngOnInit() {
    const onQueryParams = (params: Params) => {
      const { title = '', format = '' } = params;
      this.eventFacade.setFilter({ title, format });

      const { page = 0, size = 10 } = params;
      this.eventFacade.load(page, size);
    };

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(onQueryParams);
  }

  onFilterChange(queryParams: FilterEvent) {
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
