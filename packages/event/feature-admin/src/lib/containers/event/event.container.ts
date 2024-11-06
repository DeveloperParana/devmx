import { MatDatepickerModule } from '@angular/material/datepicker';
import { SearchPresentations } from '../../dialogs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { EditableEvent } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MessageService } from '@devmx/shared-ui-global';
import { EventFacade } from '@devmx/event-data-access';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SelectUser } from '@devmx/account-ui-shared';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { EventForm } from '../../forms';
import { take } from 'rxjs';
import {
  CropImageComponent,
  SelectFileComponent,
} from '@devmx/shared-ui-global/image';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-event-admin-event',
  templateUrl: './event.container.html',
  styleUrl: './event.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    EditorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    SelectFileComponent,
    CropImageComponent,
    IconComponent,
    JsonPipe,
  ],
  standalone: true,
})
export class EventContainer {
  route = inject(ActivatedRoute);

  cdr = inject(ChangeDetectorRef);

  eventFacade = inject(EventFacade);

  searchPresentations = inject(SearchPresentations);

  messageService = inject(MessageService);

  searchLeaders = inject(SelectUser);

  form = new EventForm();

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ event }) => {
      if (event && event['id']) this.form.patch(event);
    });
  }

  openSearchPresentations() {
    this.searchPresentations
      .open()
      .pipe(take(1))
      .subscribe((presentations) => {
        if (presentations) {
          for (const presentation of presentations) {
            this.form.presentations.add(presentation);
          }

          this.cdr.detectChanges();
        }
      });
  }

  openSearchLeaders() {
    this.searchLeaders
      .open()
      .pipe(take(1))
      .subscribe((leaders) => {
        if (leaders) {
          for (const presentation of leaders) {
            this.form.leaders.add(presentation);
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
