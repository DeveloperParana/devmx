import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { GithubIssue } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'devmx-issue-card-list',
  templateUrl: './issue-card-list.component.html',
  styleUrl: './issue-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatListModule, IconComponent],
  standalone: true,
})
export class IssueCardListComponent {
  data = input<GithubIssue[]>([]);
}
