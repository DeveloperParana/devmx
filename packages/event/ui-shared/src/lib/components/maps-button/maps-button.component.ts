import { Platform, PlatformModule } from '@angular/cdk/platform';
import { EventPage, Params } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  input,
  inject,
  signal,
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-maps-button',
  templateUrl: './maps-button.component.html',
  styleUrl: './maps-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, PlatformModule, IconComponent],
})
export class MapsButtonComponent implements AfterViewInit {
  data = input.required<EventPage>();

  platform = inject(Platform);

  link = signal('');

  ngAfterViewInit() {
    const { address } = this.data();

    const config: Params = { travelmode: 'driving' };

    let maps: string;

    if (this.platform.IOS) {
      maps = 'comgooglemaps://';
      config['daddr'] = address;
    } else {
      maps = '//google.com/maps/dir/';
      config['destination'] = address;
      config['api'] = '1';
    }

    const params = new URLSearchParams(config);

    this.link.set(`${maps}?${params}`);
  }
}
