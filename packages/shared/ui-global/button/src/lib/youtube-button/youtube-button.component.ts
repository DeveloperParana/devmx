import { Platform, PlatformModule } from '@angular/cdk/platform';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventPage } from '@devmx/shared-api-interfaces';
import {
  input,
  inject,
  signal,
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-youtube-button',
  templateUrl: './youtube-button.component.html',
  styleUrl: './youtube-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, PlatformModule, IconComponent],
})
export class YoutubeButtonComponent implements AfterViewInit {
  data = input.required<EventPage>();

  text = input('Abrir com YouTube');

  platform = inject(Platform);

  link = signal('');

  ngAfterViewInit() {
    const { link } = this.data();

    if (!link) return;

    if (this.platform.ANDROID || this.platform.IOS) {
      if (link.indexOf('http') >= 0) {
        link.replace('http://', 'youtube://');
      }
      if (link.indexOf('https') >= 0) {
        link.replace('https://', 'youtube://');
      }
    }

    this.link.set(link);
  }
}
