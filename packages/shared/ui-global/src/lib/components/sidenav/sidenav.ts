import { map, Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { AccountRole, Role } from '@devmx/shared-api-interfaces';

export interface SidenavItem {
  path: (string | number)[];
  text: string;
  roles: Role[];
  icon?: string;
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
    ]).pipe(
      map(([items, roles]) => {
        return items.filter((item) => item.roles.some((role) => roles[role]));
      })
    );
  }

  setRoles(roles: AccountRole) {
    this.#roles.next(roles);
  }

  resetRoles() {
    this.#roles.next(this.#initialRoles);
  }
}
