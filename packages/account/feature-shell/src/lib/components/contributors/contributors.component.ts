import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubContributor } from '@devmx/shared-api-interfaces';
import { MatChip, MatChipAvatar } from '@angular/material/chips';

@Component({
  selector: 'devmx-contributors',
  template: `
    <marquee [scrollAmount]="4">
      @for (contributor of data(); track contributor.id) {
      <mat-chip>
        <img matChipAvatar [src]="contributor.avatar_url" />
        {{ contributor.login }}
      </mat-chip>
      }
    </marquee>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;

      mat-chip {
        margin-right: 1em;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChip, MatChipAvatar],
})
export class ContributorsComponent {
  data = input<GithubContributor[]>([]);
}
