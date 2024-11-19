import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { Presentation, PresentationOut } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { PresentationFormatPipe } from '../../pipes';

@Component({
  selector: 'devmx-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatListModule,
    IconComponent,
    MatChipsModule,
    PresentationFormatPipe,
  ],
})
export class PresentationCardComponent {
  data = input.required<Presentation>();

  discrete = input<boolean | ''>(false);

  get presentation() {
    return this.data() as PresentationOut;
  }
}
