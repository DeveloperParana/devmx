import { MarkdownComponent } from '@devmx/shared-ui-global/editor';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { EventPage } from '@devmx/shared-api-interfaces';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe, DatePipe } from '@angular/common';
import { filter, map } from 'rxjs';
import {
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MapsButtonComponent,
  CalendarButtonComponent,
  YoutubeButtonComponent,
  HeartButtonComponent,
} from '@devmx/shared-ui-global/button';
import {
  ShowEventLinkPipe,
  ShowEventAddressPipe,
} from '@devmx/event-ui-shared';

@Component({
  selector: 'devmx-event-page',
  templateUrl: './event-page.container.html',
  styleUrl: './event-page.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MarkdownComponent,
    CalendarButtonComponent,
    YoutubeButtonComponent,
    MapsButtonComponent,
    HeartButtonComponent,
    ShowEventAddressPipe,
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

  route = inject(ActivatedRoute);

  event$ = this.route.data.pipe(
    filter(({ page }) => !!page),
    map(({ page }) => page as EventPage)
  );
}
