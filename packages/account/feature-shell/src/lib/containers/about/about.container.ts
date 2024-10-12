import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-about',
  templateUrl: './about.container.html',
  styleUrl: './about.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  standalone: true,
})
export class AboutContainer {
  route = inject(ActivatedRoute);

  account$ = this.route.data.pipe(
    filter((data) => 'account' in data),
    map((data) => data['account'] as AccountOut)
  );
}
