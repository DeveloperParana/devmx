import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {
  FilterPresentation,
  PresentationFacade,
} from '@devmx/presentation-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {
  ReactionEvent,
  ReactionComponent,
  FilterPresentationComponent,
} from '../../components';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactionComponent,
    FilterPresentationComponent,
    RouterLink,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationsContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);

  ngOnInit() {
    this.presentationFacade.load();
  }

  find(filter: FilterPresentation) {
    this.presentationFacade.setFilter(filter);
    this.presentationFacade.load();
  }

  onReact(event: ReactionEvent) {
    console.log(event);
  }

  onPageChange(event: PageEvent) {
    this.presentationFacade.load(event.pageIndex, event.pageSize);
  }
}
