import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  RSVPButtonComponent,
  RSVPForm,
  ShowEventAddressPipe,
  ShowEventLinkPipe,
} from '@devmx/event-ui-shared';
import { MarkdownViewComponent } from '@devmx/shared-ui-global/markdown';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventOut, RSVP } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { combineLatest, filter, map, tap } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { EventFacade, RSVPFacade } from '@devmx/event-data-access';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoPipe } from '@devmx/shared-ui-global';
import { EventFormatPipe } from '../../pipes';
import {
  MapsButtonComponent,
  YoutubeButtonComponent,
  WhatsAppButtonComponent,
  CalendarButtonComponent,
} from '@devmx/shared-ui-global/button';

@Component({
  selector: 'devmx-event-details',
  templateUrl: './event-defails.container.html',
  styleUrl: './event-defails.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RSVPButtonComponent,
    CalendarButtonComponent,
    YoutubeButtonComponent,
    WhatsAppButtonComponent,
    MapsButtonComponent,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    EventFormatPipe,
    MarkdownViewComponent,
    ShowEventAddressPipe,
    ShowEventLinkPipe,
    PhotoPipe,
    AsyncPipe,
    DatePipe,
  ],
})
export class EventDetailsContainer {
  route = inject(ActivatedRoute);

  rsvpForm = new RSVPForm();

  authFacade = inject(AuthenticationFacade);

  eventFacade = inject(EventFacade);

  rsvpFacade = inject(RSVPFacade);

  event$ = this.route.data.pipe(
    filter((data) => 'event' in data),
    map((data) => data['event'] as EventOut),
    tap((event) => this.setRSVPEvent(event.id))
  );

  constructor() {
    const user$ = this.authFacade.auth$.pipe(
      filter((user) => !!user),
      map((user) => user.id)
    );

    const rsvp$ = this.rsvpFacade.response$.pipe(
      filter((rsvp) => rsvp.length > 0)
    );

    combineLatest([user$, rsvp$])
      .pipe(takeUntilDestroyed())
      .subscribe(([id, rsvp]) => {
        const item = rsvp.find((item) => item.user.id === id);
        if (item) this.setRSVPStatus(item);
      });
  }

  setRSVPEvent = (event: string) => {
    this.rsvpForm.patchValue({ event });
    this.rsvpFacade.loadConfirmed(event);
  };

  setRSVPStatus({ status }: RSVP) {
    this.rsvpForm.patchValue({ status }, { emitEvent: false });
  }

  onStatusChange() {
    if (this.rsvpForm.valid) {
      this.rsvpFacade.create(this.rsvpForm.getRawValue());
    }
  }
}
