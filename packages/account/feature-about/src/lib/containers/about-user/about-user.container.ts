import { PresentationCardListComponent } from '@devmx/presentation-ui-shared';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { MarkdownComponent } from '@devmx/shared-ui-global/editor';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { EventCardListComponent } from '@devmx/event-ui-shared';
import { markdownToText } from '@devmx/shared-util-data';
import { EventFacade } from '@devmx/event-data-access';
import { MatCardModule } from '@angular/material/card';
import { Graph } from '@devmx/shared-ui-global/graph';
import { User } from '@devmx/shared-api-interfaces';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { filter, map, take } from 'rxjs';

@Component({
  selector: 'devmx-about-user',
  templateUrl: './about-user.container.html',
  styleUrl: './about-user.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MarkdownComponent,
    PresentationCardListComponent,
    EventCardListComponent,
    MatProgressBarModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class AboutUserContainer {
  authFacade = inject(AuthenticationFacade);

  presentationFacade = inject(PresentationFacade);

  eventFacade = inject(EventFacade);

  route = inject(ActivatedRoute);

  graph = inject(Graph);

  user$ = this.route.data.pipe(
    filter(({ about }) => !!about),
    map(({ about }) => about as User)
  );

  constructor() {
    this.user$
      .pipe(
        filter((user) => !!user.id),
        map((user) => user.id),
        take(1)
      )
      .subscribe((owner) => {
        const filter = { title: '', owner };
        this.eventFacade.setFilter(filter);
        this.presentationFacade.setFilter(filter);

        this.eventFacade.load();
        this.presentationFacade.load();
      });

    this.user$.pipe(take(1)).subscribe((user) => {
      this.graph.setImage({
        title: `Perfil de ${user.displayName}`,
        description: markdownToText(user.profile?.minibio ?? ''),
        url: `https://devparana.mx/#/sobre/${user.name}`,
        image: 'https://devparana.mx/images/resume-folder.webp',
        type: 'image/webp',
        width: 800,
        height: 800,
      });
    });
  }
}
