import { CoverPipe, param, PhotoPipe } from '@devmx/shared-ui-global';
import { EventFacade } from '@devmx/event-data-access';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-event',
  templateUrl: './event.container.html',
  styleUrl: './event.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, AsyncPipe, PhotoPipe, CoverPipe],
  standalone: true,
})
export class EventContainer implements OnInit {
  destroyRef = inject(DestroyRef);

  route = inject(ActivatedRoute);

  eventFacade = inject(EventFacade);

  ngOnInit() {
    this.route.paramMap
      .pipe(param('id'))
      .pipe(take(1))
      .subscribe((id) => {
        if (id) this.eventFacade.loadOne(id);
      });
  }
}
