import { MatDatepickerModule } from '@angular/material/datepicker';
import { SelectPresentation } from '@devmx/presentation-ui-shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TimeDirective } from '@devmx/shared-ui-global/forms';
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
import { EventForm } from '../../forms';
import { take } from 'rxjs';
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
        TimeDirective,
        IconComponent,
    ]
})
export class EventContainer {
  route = inject(ActivatedRoute);

  cdr = inject(ChangeDetectorRef);

  eventFacade = inject(EventFacade);

  // searchPresentations = inject(SearchPresentations);

  messageService = inject(MessageService);

  searchLeaders = inject(SelectUser);

  selectUser = inject(SelectUser);

  selectPresentation = inject(SelectPresentation);

  form = new EventForm();

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ event }) => {
      if (event && event['id']) this.form.patch(event);
    });
  }

  onFormatChange(format = '') {
    if (format === 'in-person') {
      this.form.controls.address?.enable();
      this.form.controls.link?.disable();
    }

    if (format === 'online') {
      this.form.controls.address?.disable();
      this.form.controls.link?.enable();
    }

    if (format === 'mixed') {
      this.form.controls.link?.enable();
      this.form.controls.address?.enable();
    }
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

  // selectPresentations() {
  //   this.searchPresentations
  //     .open()
  //     .pipe(take(1))
  //     .subscribe((presentations) => {
  //       if (presentations) {
  //         for (const presentation of presentations) {
  //           this.form.presentations.add(presentation);
  //         }

  //         this.cdr.detectChanges();
  //       }
  //     });
  // }

  // selectLeaders() {
  //   this.searchLeaders
  //     .open()
  //     .pipe(take(1))
  //     .subscribe((leaders) => {
  //       if (leaders) {
  //         for (const presentation of leaders) {
  //           this.form.leaders.add(presentation);
  //         }

  //         this.cdr.detectChanges();
  //       }
  //     });
  // }

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
