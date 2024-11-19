import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Script } from '@devmx/shared-ui-global/script';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-event-feature-page',
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
})
export class EventFeaturePageComponent {
  route = inject(ActivatedRoute);

  script = inject(Script);

  constructor() {
    this.route.data
      .pipe(
        filter(({ schema }) => !!schema),
        map(({ schema }) => schema),
        takeUntilDestroyed()
      )
      .subscribe((schema) => {
        this.script.addScript(
          {
            type: 'application/ld+json',
          },
          JSON.stringify(schema, null, 2)
        );
      });
  }
}
