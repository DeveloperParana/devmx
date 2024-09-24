import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core';

export function registerIcons(icons: [string, string][]) {
  const iconRegistry = inject(MatIconRegistry);
  const sanitizer = inject(DomSanitizer);

  for (const [name, svg] of icons) {
    const html = sanitizer.bypassSecurityTrustHtml(svg);
    iconRegistry.addSvgIconLiteral(name, html);
  }
}
