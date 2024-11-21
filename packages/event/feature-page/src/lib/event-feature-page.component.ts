import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { AppShellComponent } from '@devmx/shared-ui-global/shell';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Script } from '@devmx/shared-ui-global/script';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-event-feature-page',
  template: `
    <devmx-app-shell>
      <router-outlet />
    </devmx-app-shell>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatToolbarModule, AppShellComponent],
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
        const type = 'application/ld+json';
        const content = JSON.stringify(schema, null, 2);
        this.script.addScript({ type }, content);
      });
  }
}
