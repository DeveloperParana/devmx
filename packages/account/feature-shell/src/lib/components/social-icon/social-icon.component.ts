import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon, IconComponent } from '@devmx/shared-ui-global/icon';
import { UserSocialType } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-social-icon',
  template: `<devmx-icon [name]="icon" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
})
export class SocialIconComponent {
  type = input.required<UserSocialType>();

  get icon(): Icon {
    switch (this.type()) {
      case 'github':
        return 'social/github';
      case 'linkedIn':
        return 'social/linkedin';
      case 'instagram':
        return 'social/instagram';
      case 'notion':
        return 'social/notion';
      case 'website':
        return 'software/web-info';
      case 'whatsApp':
        return 'social/whatsapp';
    }
  }
}
