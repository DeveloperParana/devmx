import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatChip, MatChipAvatar } from '@angular/material/chips';
import { GithubContributor } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-contributors',
  template: `
    <marquee>
      @for (contributor of data(); track contributor.id) {
      <mat-chip>
        <img
          matChipAvatar
          [src]="contributor.avatar_url"
          [alt]="contributor.login"
        />
        {{ contributor.login }}
      </mat-chip>
      }
    </marquee>
  `,
  styles: `
    :host {
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
