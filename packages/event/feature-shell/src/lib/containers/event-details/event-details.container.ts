import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MarkedPipe, SafeHtmlPipe } from '@devmx/shared-ui-global/editor';
import { RSVPButtonComponent, RSVPForm } from '@devmx/event-ui-shared';
import { PhotoPipe, StateNamePipe } from '@devmx/shared-ui-global';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventOut, RSVP } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { combineLatest, filter, map, tap } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RSVPFacade } from '@devmx/event-data-access';
import { ReactiveFormsModule } from '@angular/forms';
import { EventFormatPipe } from '../../pipes';

@Component({
  selector: 'devmx-event-details',
  templateUrl: './event-defails.container.html',
  styleUrl: './event-defails.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RSVPButtonComponent,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    EventFormatPipe,
    StateNamePipe,
    SafeHtmlPipe,
    MarkedPipe,
    PhotoPipe,
    AsyncPipe,
    DatePipe,
  ],
  standalone: true,
})
export class EventDetailsContainer {
  route = inject(ActivatedRoute);

  rsvpForm = new RSVPForm();

  authFacade = inject(AuthFacade);

  rsvpFacade = inject(RSVPFacade);

  event$ = this.route.data.pipe(
    filter((data) => 'event' in data),
    map((data) => data['event'] as EventOut),
    tap((event) => this.setRSVPEvent(event.id))
  );

  constructor() {
    const account$ = this.authFacade.user$.pipe(
      filter((account) => !!account),
      map((account) => account.id)
    );

    const rsvp$ = this.rsvpFacade.response$.pipe(
      filter((rsvp) => rsvp.length > 0)
    );

    combineLatest([account$, rsvp$])
      .pipe(takeUntilDestroyed())
      .subscribe(([id, rsvp]) => {
        const item = rsvp.find((item) => item.account.id === id);
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
