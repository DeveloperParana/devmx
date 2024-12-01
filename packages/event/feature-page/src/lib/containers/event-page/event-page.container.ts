import { MarkdownViewComponent } from '@devmx/shared-ui-global/markdown';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { EventPage, RSVP } from '@devmx/shared-api-interfaces';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe, DatePipe } from '@angular/common';
import { combineLatest, filter, map, tap } from 'rxjs';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import {
  MapsButtonComponent,
  CalendarButtonComponent,
  YoutubeButtonComponent,
  HeartButtonComponent,
  WhatsAppButtonComponent,
} from '@devmx/shared-ui-global/button';
import {
  ShowEventLinkPipe,
  ShowEventAddressPipe,
  RSVPButtonComponent,
  RSVPForm,
} from '@devmx/event-ui-shared';
import { ReactiveFormsModule } from '@angular/forms';
import { RSVPFacade } from '@devmx/event-data-access';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'devmx-event-page',
  templateUrl: './event-page.container.html',
  styleUrl: './event-page.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MarkdownViewComponent,
    ReactiveFormsModule,
    CalendarButtonComponent,
    YoutubeButtonComponent,
    WhatsAppButtonComponent,
    MapsButtonComponent,
    HeartButtonComponent,
    ShowEventAddressPipe,
    RSVPButtonComponent,
    ShowEventLinkPipe,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    IconComponent,
    AsyncPipe,
    DatePipe,
  ],
})
export class EventPageContainer {
  authFacade = inject(AuthenticationFacade);
  rsvpFacade = inject(RSVPFacade);
  route = inject(ActivatedRoute);

  event$ = this.route.data.pipe(
    filter(({ page }) => !!page),
    map(({ page }) => page as EventPage),
    tap((event) => this.setRSVPEvent(event.id))
  );

  form = new RSVPForm();

  constructor() {
    if (localStorage.getItem('accessToken')) {
      this.authFacade.load();

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
  }

  setRSVPEvent = (event: string) => {
    this.form.patchValue({ event });
    this.rsvpFacade.loadConfirmed(event);
  };

  setRSVPStatus({ status }: RSVP) {
    this.form.patchValue({ status }, { emitEvent: false });
  }

  onStatusChange() {
    if (this.form.valid) {
      this.rsvpFacade.create(this.form.getRawValue());
    }
  }
}
