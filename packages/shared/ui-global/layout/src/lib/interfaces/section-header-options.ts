import { Icon } from '@devmx/shared-ui-global/icon';
import { NavLinkOptions } from './nav-link-options';

export interface SectionHeaderOptions {
  label: string;
  icon?: Icon;
  links: NavLinkOptions[];
}
