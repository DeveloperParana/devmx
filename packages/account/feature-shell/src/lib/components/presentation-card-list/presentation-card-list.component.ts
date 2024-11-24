import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PresentationFormatPipe } from '@devmx/presentation-ui-shared';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { Presentation } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'devmx-presentation-card-list',
  templateUrl: './presentation-card-list.component.html',
  styleUrl: './presentation-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatListModule,
    IconComponent,
    PresentationFormatPipe,
    RouterLink,
  ],
  standalone: true,
})
export class PresentationCardListComponent {
  data = input<Presentation[]>([]);
}
