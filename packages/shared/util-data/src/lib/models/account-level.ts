import { Account, RoleGroup } from '@devmx/shared-api-interfaces';

enum Permission {
  Recruiter = 0b1,
  Sponsor = 0b1 << Recruiter,
  Worthy = 0b1 << Sponsor,
  Board = 0b1 << Worthy,
}

export class AccountLevel {
  roles;

  #level = 0;

  get level() {
    return this.#level;
  }

  #groups: RoleGroup[] = [];

  get groups() {
    return this.#groups;
  }

  constructor(account: Pick<Account, 'roles'>) {
    this.roles = account.roles;

    this.#groups.push('auto');

    if (this.isRecruiter) {
      this.#level += Permission.Recruiter;
      this.#groups.push('recruiter');
    }

    if (this.isSponsor) {
      this.#level += Permission.Sponsor;
      this.#groups.push('sponsor');
    }

    if (this.isWorthy) {
      this.#level += Permission.Worthy;
      this.#groups.push('worthy');
    }

    if (this.isBoard) {
      this.#level += Permission.Board;
      this.#groups.push('board');
    }
  }

  get isRecruiter() {
    return this.roles.recruiter;
  }

  get isSponsor() {
    return this.roles.donor || this.roles.neighbor;
  }

  get isWorthy() {
    return this.roles.leader || this.roles.staff || this.roles.fellow;
  }

  get isBoard() {
    return this.roles.director || this.roles.manager;
  }
}
