import { Icon } from '@devmx/shared-ui-global/icon';
import { NavLink } from './nav-link';

export class SectionHeader {
  constructor(
    readonly label: string,
    readonly links: NavLink[],
    public icon?: Icon
  ) {}
}
