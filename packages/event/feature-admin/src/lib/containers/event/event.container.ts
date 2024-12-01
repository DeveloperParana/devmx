import { EventPresentationsComponent } from './event-presentations/event-presentations.component';
import { EventLeadersComponent } from './event-leaders/event-leaders.component';
import { AutoSaveButtonComponent } from '@devmx/shared-ui-global/button';
import { EventFormComponent } from './event-form/event-form.component';
import { SelectPresentation } from '@devmx/presentation-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EditableEvent } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '@devmx/shared-ui-global';
import { EventFacade } from '@devmx/event-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SelectUser } from '@devmx/account-ui-shared';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventForm } from '../../forms';
import { take } from 'rxjs';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
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
  route = inject(ActivatedRoute);

  cdr = inject(ChangeDetectorRef);

  eventFacade = inject(EventFacade);

  messageService = inject(MessageService);

  searchLeaders = inject(SelectUser);

  selectPresentation = inject(SelectPresentation);

  selectUser = inject(SelectUser);

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
      const value = this.form.getRawValue();
      if (value.id) this.eventFacade.update(value as EditableEvent);
      else this.eventFacade.create(value as EditableEvent);

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
