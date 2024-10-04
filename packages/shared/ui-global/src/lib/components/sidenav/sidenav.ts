import { map, Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { AccountRole, Role } from '@devmx/shared-api-interfaces';

export interface SidenavItem {
  path: (string | number)[];
  text: string;
  roles: Role[];
  icon?: string;
  children?: SidenavItem[];
}

export class Sidenav {
  #items: BehaviorSubject<SidenavItem[]>;

  #initialRoles = {
    member: false,
    speaker: false,
    donor: false,
    neighbor: false,
    leader: false,
    staff: false,
    fellow: false,
    manager: false,
    director: false,
  };

  #roles = new BehaviorSubject<AccountRole>(this.#initialRoles);

  itemsByRoles$: Observable<SidenavItem[]>;

  constructor(items: SidenavItem[] = []) {
    this.#items = new BehaviorSubject(items);

    this.itemsByRoles$ = combineLatest([
      this.#items.asObservable(),
      this.#roles.asObservable(),
    ]).pipe(map(this.#filterItems));
  }

  #filterItem = (roles: AccountRole) => (item: SidenavItem) => {
    if (item.children) {
      const children = this.#filterItems([item.children, roles]);

      if (children.length > 0) return { ...item, children };
    }

    if (item.roles.some((role) => roles[role])) return item;

    return;
  };

  #filterItems = ([items, roles]: [
    SidenavItem[],
    AccountRole
  ]): SidenavItem[] => {
    return items.map(this.#filterItem(roles)).filter((item) => !!item);
  };

  setRoles(roles: AccountRole) {
    this.#roles.next(roles);
  }

  resetRoles() {
    this.#roles.next(this.#initialRoles);
  }
}
