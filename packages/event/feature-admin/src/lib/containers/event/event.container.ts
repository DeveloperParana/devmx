import { EventPresentationsComponent } from './event-presentations/event-presentations.component';
import { EventLeadersComponent } from './event-leaders/event-leaders.component';
import { AutoSaveButtonComponent } from '@devmx/shared-ui-global/button';
import { EventFormComponent } from './event-form/event-form.component';
import { SelectPresentation } from '@devmx/presentation-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '@devmx/shared-ui-global';
import { ActivatedRoute, Router } from '@angular/router';
import { EventFacade } from '@devmx/event-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SelectUser } from '@devmx/account-ui-shared';
import { ReactiveFormsModule } from '@angular/forms';
import { Event } from '@devmx/shared-api-interfaces';
import { EventForm } from '../../forms';
import { take } from 'rxjs';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import {
  MarkdownViewComponent,
  MarkdownEditorComponent,
  MarkdownToolbarComponent,
} from '@devmx/shared-ui-global/markdown';

@Component({
  selector: 'devmx-event-admin-event',
  templateUrl: './event.container.html',
  styleUrl: './event.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MarkdownViewComponent,
    MarkdownEditorComponent,
    MarkdownToolbarComponent,
    EventPresentationsComponent,
    AutoSaveButtonComponent,
    EventLeadersComponent,
    EventFormComponent,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
  ],
})
export class EventContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  cdr = inject(ChangeDetectorRef);

  eventFacade = inject(EventFacade);

  messageService = inject(MessageService);

  searchLeaders = inject(SelectUser);

  selectPresentation = inject(SelectPresentation);

  selectUser = inject(SelectUser);

  saving = signal(false);

  form = new EventForm();

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ event }) => {
      if (event && event['id']) {
        this.form.patch(event);
        this.form.onFormatChange(event.format);

        if (event['date']) {
          const date = new Date(event.date);
          this.form.patchValue({ date });
        }
      }
    });
  }

  selectPresentations() {
    const select$ = this.selectPresentation.open({ multiple: true });

    select$.pipe(take(1)).subscribe((presentations) => {
      if (presentations) {
        for (const presentation of presentations) {
          this.form.presentations.add(presentation);
        }

        this.cdr.detectChanges();
      }
    });
  }

  selectLeaders() {
    const select$ = this.selectUser.open({
      multiple: true,
      onlyRole: 'leader',
    });

    select$.pipe(take(1)).subscribe((leaders) => {
      if (leaders) {
        for (const leader of leaders) {
          this.form.leaders.add(leader);
        }

        this.cdr.detectChanges();
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.saving.set(true);

      const value = this.form.getRawValue() as Event;

      if (value.id) {
        this.eventFacade.update(value).subscribe(this.#onCompleteRequest);
      } else {
        this.eventFacade.create(value).subscribe(this.#onCompleteRequest);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  #onCompleteRequest = (event?: Event) => {
    this.saving.set(false);
    const message = `Armazenando informações`;
    this.messageService.open({ message });

    if (event && event.id) {
      this.router.navigate(['..', event.id], { relativeTo: this.route });
    }
  };
}
