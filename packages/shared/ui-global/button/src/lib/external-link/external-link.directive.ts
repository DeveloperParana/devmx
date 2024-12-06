import { isPlatformBrowser } from '@angular/common';
import { InjectionToken } from '@angular/core';
import {
  OnInit,
  inject,
  Directive,
  PLATFORM_ID,
  HostAttributeToken,
} from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WINDOW');

export function windowProvider(document: Document) {
  return document.defaultView;
}

export function isExternalLink(link: string): boolean {
  return link.startsWith('http://') || link.startsWith('https://');
}

@Directive({
  selector: `[devmxExternalLink],a[href]:not([noBlankForExternalLink])`,
  host: { '[attr.target]': 'target', '[attr.rel]': 'rel' },
})
export class ExternalLinkDirective implements OnInit {
  #platformId = inject(PLATFORM_ID);

  target: '_blank' | '_self' | '_parent' | '_top' | '' = '';

  href = inject(new HostAttributeToken('href'), { optional: false });

  rel: 'noopener noreferrer' | '' = '';

  ngOnInit() {
    if (!this.href) {
      throw new Error(`Este elemento não é um link`);
    }

    this.#setAnchorTarget();
  }

  #setAnchorTarget() {
    if (!isPlatformBrowser(this.#platformId)) {
      return;
    }

    if (isExternalLink(this.href)) {
      this.rel = 'noopener noreferrer';
      this.target = '_blank';
    }
  }
}
