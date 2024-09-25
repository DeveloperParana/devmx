import { State } from '@devmx/shared-data-access';
import { NavItem } from '../interfaces/nav-item';

interface AccountNavState {
  items: Set<NavItem>;
}

export class AccountNavFacade extends State<AccountNavState> {
  items$ = this.select((state) => Array.from(state.items));

  constructor(items: NavItem[] = []) {
    super({ items: new Set(items) });
  }

  setItems(newItems: NavItem[]) {
    const items = new Set(newItems);

    this.setState({ items });
  }

  hasItem(item: NavItem) {
    return this.state.items.has(item);
  }

  addItem(item: NavItem) {
    const items = this.state.items;

    if (!items.has(item)) {
      items.add(item);
    }

    this.setState({ items });
  }
}
