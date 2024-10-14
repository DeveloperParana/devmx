import { map, Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { AccountRole, Role } from '@devmx/shared-api-interfaces';
import { DEFAULT_ROLES } from '@devmx/shared-util-data';
import { Icon } from '@devmx/shared-ui-global/icon';

export interface LayoutSidenavItem {
  path: (string | number)[];
  text: string;
  roles: Role[];
  icon?: Icon & string;
  children?: LayoutSidenavItem[];
}

export class LayoutSidenav {
  #items: BehaviorSubject<LayoutSidenavItem[]>;

  #roles = new BehaviorSubject<AccountRole>(DEFAULT_ROLES);

  itemsByRoles$: Observable<LayoutSidenavItem[]>;

  constructor(items: LayoutSidenavItem[] = []) {
    this.#items = new BehaviorSubject(items);

    this.itemsByRoles$ = combineLatest([
      this.#items.asObservable(),
      this.#roles.asObservable(),
    ]).pipe(map(this.#filterItems));
  }

  #filterItem = (roles: AccountRole) => (item: LayoutSidenavItem) => {
    if (item.children) {
      const children = this.#filterItems([item.children, roles]);

      if (children.length > 0) return { ...item, children };
    }

    if (item.roles.some((role) => roles[role])) return item;

    return;
  };

  #filterItems = ([items, roles]: [
    LayoutSidenavItem[],
    AccountRole
  ]): LayoutSidenavItem[] => {
    return items.map(this.#filterItem(roles)).filter((item) => !!item);
  };

  setRoles(roles: AccountRole) {
    this.#roles.next(roles);
  }

  resetRoles() {
    this.#roles.next(DEFAULT_ROLES);
  }
}
