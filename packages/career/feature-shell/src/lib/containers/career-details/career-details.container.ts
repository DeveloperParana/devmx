import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobFacade } from '@devmx/career-data-access';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { param } from '@devmx/shared-ui-global';
import { take } from 'rxjs';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-career-details',
  templateUrl: './career-details.container.html',
  styleUrl: './career-details.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  standalone: true,
})
export class CareerDetailsContainer implements OnInit {
  router = inject(Router);

  route = inject(ActivatedRoute);

  jobFacade = inject(JobFacade);

  ngOnInit() {
    const id$ = this.route.paramMap.pipe(param('id'));
    id$.pipe(take(1)).subscribe((id) => {
      if (id) this.jobFacade.loadOne(id);
    });
  }
}
