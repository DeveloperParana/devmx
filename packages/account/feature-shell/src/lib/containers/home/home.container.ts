import { PresentationCardListComponent } from '@devmx/presentation-ui-shared';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { EventCardListComponent } from '@devmx/event-ui-shared';
import { JobOpeningFacade } from '@devmx/career-data-access';
import { MatButtonModule } from '@angular/material/button';
import { GithubFacade } from '@devmx/shared-data-access';
import { MatCardModule } from '@angular/material/card';
import { AlbumFacade } from '@devmx/album-data-access';
import { EventFacade } from '@devmx/event-data-access';
import { AsyncPipe } from '@angular/common';
import {
  AlbumCardListComponent,
  JobOpeningCardListComponent,
  ContributorsComponent,
} from '../../components';
@Component({
  selector: 'devmx-home',
  templateUrl: './home.container.html',
  styleUrl: './home.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PresentationCardListComponent,
    JobOpeningCardListComponent,
    EventCardListComponent,
    AlbumCardListComponent,
    ContributorsComponent,
    SkeletonComponent,
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class HomeContainer {
  githubFacade = inject(GithubFacade);
  jobOpeningFacade = inject(JobOpeningFacade);
  presentationFacade = inject(PresentationFacade);
  albumFacade = inject(AlbumFacade);
  eventFacade = inject(EventFacade);

  constructor() {
    this.githubFacade.loadContributors('devmx');

    this.eventFacade.setPage(0, 3);
    this.eventFacade.load();

    this.jobOpeningFacade.setPage(0, 3);
    this.jobOpeningFacade.load();

    this.presentationFacade.setPage(0, 3);
    this.presentationFacade.load();

    this.albumFacade.setPage(0, 3);
    this.albumFacade.load();
  }
}
