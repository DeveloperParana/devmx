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
  templateUrl: './career-details.outlet.html',
  styleUrl: './career-details.outlet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  standalone: true,
})
export class CareerDetailsOutlet implements OnInit {
  router = inject(Router);

  route = inject(ActivatedRoute);

  jobFacade = inject(JobFacade);

  ngOnInit() {
    const id$ = this.route.paramMap.pipe(param('id'));
    id$.pipe(take(1)).subscribe((id) => {
      console.log(id);

      if (id) this.jobFacade.loadOne(id);
    });
  }
}
