import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubContributor } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'devmx-contributor-card-list',
  templateUrl: './contributor-card-list.component.html',
  styleUrl: './contributor-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatListModule],
  standalone: true,
})
export class ContributorCardListComponent {
  data = input<GithubContributor[]>([]);
}
