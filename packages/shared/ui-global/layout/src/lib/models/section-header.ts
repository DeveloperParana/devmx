import { NavLink } from './nav-link';

export class SectionHeader {
  constructor(readonly label: string, readonly links: NavLink[]) {}
}
