import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MarkdownComponent } from '@devmx/shared-ui-global/editor';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventPage } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe, DatePipe } from '@angular/common';
import { filter, map } from 'rxjs';
import {
  EventFormatPipe,
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
    ShowEventAddressPipe,
    ShowEventLinkPipe,
    MatTooltipModule,
    EventFormatPipe,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    IconComponent,
    AsyncPipe,
    DatePipe,
  ],
})
export class EventPageContainer {
  route = inject(ActivatedRoute);

  event$ = this.route.data.pipe(
    filter(({ page }) => !!page),
    map(({ page }) => page as EventPage)
  );
}
