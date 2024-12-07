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
  selector: 'devmx-whats-app-button',
  templateUrl: './whats-app-button.component.html',
  styleUrl: './whats-app-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, PlatformModule, IconComponent],
})
export class WhatsAppButtonComponent implements AfterViewInit {
  data = input.required<EventPage>();

  text = input('Enviar no WhatsApp');

  platform = inject(Platform);

  link = signal('');

  ngAfterViewInit() {
    const { id, title, start, address } = this.data();

    const link = `https://devparana.mx/#/evento/${id}`;

    const header = `🎉 *${title}* 🎉`;

    const date = `🗓️ ${start.toLocaleDateString()}`;

    const time = `⏰ ${start.toLocaleTimeString().slice(0, 5)}`;

    const location = `🗺️ ${address}`;

    const text = [link, header, date, time, location].join('\n\n');

    const whatsApp = this.platform.IOS
      ? 'https://api.whatsapp.com/send'
      : 'whatsapp://send';

    const media = `https://devparana.mx/devmx.svg`;

    const params = new URLSearchParams({ text, media });

    this.link.set(`${whatsApp}?${params}`);
  }
}
