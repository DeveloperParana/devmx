import { AccountRefForm, PresentationRefForm } from '@devmx/shared-ui-global';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { CityFacade } from '@devmx/location-data-access';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EventFacade } from '@devmx/event-data-access';
import { Event } from '@devmx/shared-api-interfaces';
import { param } from '@devmx/shared-ui-global';
import { EventForm } from '../../forms';
import { switchMap, take } from 'rxjs';
import {
  provideSearchLeaders,
  provideSearchPresentations,
  SearchLeadersService,
  SearchPresentationsService,
} from '../../dialogs';
import {
  AutocompleteCitiesComponent,
  AutocompleteCitiesService,
} from '@devmx/location-ui-forms';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'devmx-account-event',
  templateUrl: './event.container.html',
  styleUrl: './event.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideNativeDateAdapter(),
    provideSearchLeaders(),
    provideSearchPresentations(),
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    AutocompleteCitiesComponent,
    MatFormFieldModule,
    MatCheckboxModule,
    TextFieldModule,
    DragDropModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  standalone: true,
})
export class EventContainer implements OnInit {
  eventFacade = inject(EventFacade);

  cityFacade = inject(CityFacade);

  searchLeaders = inject(SearchLeadersService);

  searchPresentations = inject(SearchPresentationsService);

  autocompleteCitiesService = inject(AutocompleteCitiesService);

  destroyRef = inject(DestroyRef);

  cdRef = inject(ChangeDetectorRef);

  id$ = inject(ActivatedRoute).paramMap.pipe(param('id'));

  form = new EventForm();

  leader = new FormControl();

  ngOnInit() {
    this.eventFacade.event$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event) this.form.fill(event);
      });

    this.id$.pipe(take(1)).subscribe((id) => {
      if (id) this.eventFacade.loadOne(id);
    });

    this.autocompleteCitiesService.search$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap((name) => {
          return name ? this.cityFacade.search(name) : [];
        })
      )
      .subscribe((cities) => {
        this.autocompleteCitiesService.setCities(cities);
      });
  }

  openSearchLeaders() {
    const data = this.form.leaders.getRawValue();
    const leader$ = this.searchLeaders.open(data).afterClosed();

    leader$.pipe(take(1)).subscribe((leaders) => {
      if (leaders && leaders.length > 0) {
        this.form.setLeaders(leaders);
        this.cdRef.detectChanges();
      }
    });
  }

  openSearchPresentations() {
    const data = this.form.presentations.getRawValue();
    const presentation$ = this.searchPresentations.open(data).afterClosed();

    presentation$.pipe(take(1)).subscribe((presentations) => {
      if (presentations && presentations.length > 0) {
        this.form.setPresentations(presentations);
        this.cdRef.detectChanges();
      }
    });
  }

  dropLeaders(event: CdkDragDrop<AccountRefForm[]>) {
    moveItemInArray(
      this.form.leaders.controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropPresentations(event: CdkDragDrop<PresentationRefForm[]>) {
    moveItemInArray(
      this.form.presentations.controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  onSubmit() {
    if (this.form.valid) {
      return this.eventFacade.update(this.form.getRawValue() as Event);
    }

    this.form.markAllAsTouched();
  }
}
