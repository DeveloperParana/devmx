import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Institution } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'devmx-institution-card',
    templateUrl: './institution-card.component.html',
    styleUrl: './institution-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCardModule]
})
export class InstitutionCardComponent {
  data = input.required<Institution>();

  discrete = input<boolean | ''>(false);

  get institution() {
    return this.data();
  }
}
