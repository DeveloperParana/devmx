import { AccountRole, Role } from '@devmx/shared-api-interfaces';
import { NavLinkOptions, PathSegment } from '../interfaces';
import { Icon } from '@devmx/shared-ui-global/icon';
import { Subject } from 'rxjs';

export class NavLink {
  route: PathSegment[];

  label: string;

  icon?: Icon;

  badge?: Subject<number>;

  roles: Role[];

  #showLock = false;

  get showLock() {
    return this.#showLock;
  }

  #lock: 'lock' | 'opened-lock' = 'lock';

  get lock() {
    return this.#lock;
  }

  #disabled = false;

  get disabled() {
    return this.#disabled;
  }

  readonly kind = 'link';

  constructor(options: NavLinkOptions) {
    this.route = options.route;
    this.label = options.label;
    this.icon = options.icon;
    this.badge = options.badge;
    this.roles = options.roles ?? [];

    if (this.roles.length > 1) {
      this.#showLock = true;
    }
  }

  validate(roles: AccountRole) {
    const hasSomeRole = this.roles.some((role) => roles[role]);
    this.#handleValidation(hasSomeRole);
    return hasSomeRole;
  }

  #handleValidation(granted: boolean) {
    this.#showLock = true;

    if (granted) {
      this.#lock = 'opened-lock';
    } else {
      this.#disabled = true;
      this.route = [];
    }
  }
}
