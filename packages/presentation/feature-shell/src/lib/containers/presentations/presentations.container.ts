import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { ReactionEvent, ReactionComponent } from '../../components';
import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FilterPresentationForm } from '../../forms';
import { AsyncPipe } from '@angular/common';
import {
  FormField,
  FilterComponent,
  TextboxFormField,
  DropdownFormField,
} from '@devmx/shared-ui-global/filter';
import {
  FilterPresentation,
  PresentationFacade,
} from '@devmx/presentation-data-access';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactionComponent,
    PaginatorComponent,
    FilterComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationsContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  filterForm = new FilterPresentationForm();

  filterFields: FormField[] = [
    new TextboxFormField({
      order: 0,
      key: 'title',
      label: 'Título',
      controlType: 'text',
    }),
    new DropdownFormField<PresentationFormat | ''>({
      order: 1,
      key: 'format',
      label: 'Formato',
      options: [
        { value: '', viewValue: 'Todos' },
        { value: 'talk', viewValue: 'Palestra' },
        { value: 'workshop', viewValue: 'Oficina (workshop)' },
        { value: 'webinar', viewValue: 'Seminário online (webinar)' },
      ],
    }),
  ];

  ngOnInit() {
    const onQueryParams = (params: Params) => {
      const { title = '', format = '' } = params;
      this.presentationFacade.setFilter({ title, format });

      const { page = 0, size = 10 } = params;
      this.presentationFacade.load(page, size);
    };

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(onQueryParams);
  }

  onReact(event: ReactionEvent) {
    console.log(event);
  }

  onFilterChange(queryParams: FilterPresentation) {
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
