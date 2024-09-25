import { AccountRole } from '@devmx/shared-api-interfaces';
import { AccountLevel, merge } from '@devmx/shared-util-data';

const roles: AccountRole = {
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

function createAccountLevel(roles: AccountRole) {
  return new AccountLevel({ roles });
}

describe('Account Domain', () => {
  it('member to be level 0', () => {
    const account = createAccountLevel(merge(roles, { member: true }));

    expect(account.level).toBe(0);
  });

  it('speaker to be level 0', () => {
    const account = createAccountLevel(merge(roles, { speaker: true }));

    expect(account.level).toBe(0);
  });

  it('speaker contains group auto', () => {
    const account = createAccountLevel(merge(roles, { speaker: true }));

    expect(account.groups).toContain('auto');
  });

  it('donor to be level 1', () => {
    const account = createAccountLevel(merge(roles, { donor: true }));

    expect(account.level).toBe(1);
  });

  it('neighbor to be level 1', () => {
    const account = createAccountLevel(merge(roles, { neighbor: true }));

    expect(account.level).toBe(1);
  });

  it('donor contains group sponsor', () => {
    const account = createAccountLevel(merge(roles, { donor: true }));

    expect(account.groups).toContain('sponsor');
  });

  it('leader to be level 2', () => {
    const account = createAccountLevel(merge(roles, { leader: true }));

    expect(account.level).toBe(2);
  });

  it('staff to be level 2', () => {
    const account = createAccountLevel(merge(roles, { staff: true }));

    expect(account.level).toBe(2);
  });

  it('fellow to be level 2', () => {
    const account = createAccountLevel(merge(roles, { fellow: true }));

    expect(account.level).toBe(2);
  });

  it('fellow contains group worthy', () => {
    const account = createAccountLevel(merge(roles, { fellow: true }));

    expect(account.groups).toContain('worthy');
  });

  it('sponsor worthy to be level 3', () => {
    const account = createAccountLevel(
      merge(roles, { donor: true, staff: true })
    );

    expect(account.level).toBe(3);
  });

  it('manager to be level 4', () => {
    const account = createAccountLevel(merge(roles, { manager: true }));

    expect(account.level).toBe(4);
  });

  it('director to be level 4', () => {
    const account = createAccountLevel(merge(roles, { director: true }));

    expect(account.level).toBe(4);
  });

  it('director contains group board', () => {
    const account = createAccountLevel(merge(roles, { director: true }));

    expect(account.groups).toContain('board');
  });

  it('sponsor board to be level 5', () => {
    const account = createAccountLevel(
      merge(roles, { donor: true, director: true })
    );

    expect(account.level).toBe(5);
  });

  it('worthy board to be level 6', () => {
    const account = createAccountLevel(
      merge(roles, { staff: true, director: true })
    );

    expect(account.level).toBe(6);
  });

  it('donor assign staff to be false', () => {
    const assigner = createAccountLevel(merge(roles, { staff: true }));
    const assign = createAccountLevel(merge(roles, { donor: true }));

    expect(assigner.level > assign.level).toBeTruthy();
  });

  it('staff assign donor to be true', () => {
    const assign = createAccountLevel(merge(roles, { staff: true }));
    const assigner = createAccountLevel(merge(roles, { staff: true }));

    expect(assigner.level > assign.level).toBeFalsy();
  });

  it('staff assign director to be false', () => {
    const assigner = createAccountLevel(merge(roles, { director: true }));
    const assign = createAccountLevel(merge(roles, { staff: true }));

    expect(assigner.level > assign.level).toBeTruthy();
  });

  it('director assign staff to be true', () => {
    const assign = createAccountLevel(merge(roles, { director: true }));
    const assigner = createAccountLevel(merge(roles, { staff: true }));

    expect(assigner.level > assign.level).toBeFalsy();
  });

  it('all roles except board assign board', () => {
    const assign = createAccountLevel(merge(roles, { director: true }));
    const assigner = createAccountLevel(
      merge(roles, {
        member: true,
        speaker: true,
        donor: true,
        neighbor: true,
        leader: true,
        staff: true,
        fellow: true,
        manager: false,
        director: false,
      })
    );

    expect(assigner.level > assign.level).toBeFalsy();
  });
});
