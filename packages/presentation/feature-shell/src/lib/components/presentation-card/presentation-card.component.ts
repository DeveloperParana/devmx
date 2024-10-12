import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { PresentationOut } from '@devmx/shared-api-interfaces';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PresentationFormatPipe } from '../../pipes';

@Component({
  selector: 'devmx-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PresentationFormatPipe,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    MatChipSet,
    MatChip,
  ],
  standalone: true,
})
export class PresentationCardComponent {
  data = input.required<PresentationOut>();

  get presentation() {
    return this.data();
  }
}
