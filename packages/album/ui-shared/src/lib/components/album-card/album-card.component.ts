import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Album } from '@devmx/shared-api-interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'devmx-album-card',
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatListModule, IconComponent, DatePipe],
  standalone: true,
})
export class AlbumCardComponent {
  data = input.required<Album>();

  get album() {
    return this.data();
  }
}
