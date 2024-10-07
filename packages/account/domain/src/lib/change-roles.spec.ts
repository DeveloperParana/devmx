import { AccountRole } from '@devmx/shared-api-interfaces';
import { AccountLevel, DEFAULT_ROLES, merge } from '@devmx/shared-util-data';

function createAccountLevel(roles: AccountRole) {
  return new AccountLevel({ roles });
}

describe('Account Domain', () => {
  it('member to be level 0', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { member: true }));

    expect(account.level).toBe(0);
  });

  it('speaker to be level 0', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { speaker: true }));

    expect(account.level).toBe(0);
  });

  it('speaker contains group auto', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { speaker: true }));

    expect(account.groups).toContain('auto');
  });

  it('recruiter to be level 1', () => {
    const account = createAccountLevel(
      merge(DEFAULT_ROLES, { recruiter: true })
    );

    expect(account.level).toBe(1);
  });

  it('donor to be level 2', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { donor: true }));

    expect(account.level).toBe(2);
  });

  it('neighbor to be level 2', () => {
    const account = createAccountLevel(
      merge(DEFAULT_ROLES, { neighbor: true })
    );

    expect(account.level).toBe(2);
  });

  it('donor contains group sponsor', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { donor: true }));

    expect(account.groups).toContain('sponsor');
  });

  it('leader to be level 4', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { leader: true }));

    expect(account.level).toBe(4);
  });

  it('staff to be level 4', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { staff: true }));

    expect(account.level).toBe(4);
  });

  it('fellow to be level 4', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { fellow: true }));

    expect(account.level).toBe(4);
  });

  it('fellow contains group worthy', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { fellow: true }));

    expect(account.groups).toContain('worthy');
  });

  it('sponsor worthy to be level 6', () => {
    const account = createAccountLevel(
      merge(DEFAULT_ROLES, { donor: true, staff: true })
    );

    expect(account.level).toBe(6);
  });

  it('manager to be level 16', () => {
    const account = createAccountLevel(merge(DEFAULT_ROLES, { manager: true }));

    expect(account.level).toBe(16);
  });

  it('director to be level 16', () => {
    const account = createAccountLevel(
      merge(DEFAULT_ROLES, { director: true })
    );

    expect(account.level).toBe(16);
  });

  it('director contains group board', () => {
    const account = createAccountLevel(
      merge(DEFAULT_ROLES, { director: true })
    );

    expect(account.groups).toContain('board');
  });

  it('sponsor board to be level 18', () => {
    const account = createAccountLevel(
      merge(DEFAULT_ROLES, { donor: true, director: true })
    );

    expect(account.level).toBe(18);
  });

  it('worthy board to be level 20', () => {
    const account = createAccountLevel(
      merge(DEFAULT_ROLES, { staff: true, director: true })
    );

    expect(account.level).toBe(20);
  });

  it('donor assign staff to be false', () => {
    const assigner = createAccountLevel(merge(DEFAULT_ROLES, { staff: true }));
    const assign = createAccountLevel(merge(DEFAULT_ROLES, { donor: true }));

    expect(assigner.level > assign.level).toBeTruthy();
  });

  it('staff assign donor to be true', () => {
    const assign = createAccountLevel(merge(DEFAULT_ROLES, { staff: true }));
    const assigner = createAccountLevel(merge(DEFAULT_ROLES, { staff: true }));

    expect(assigner.level > assign.level).toBeFalsy();
  });

  it('staff assign director to be false', () => {
    const assigner = createAccountLevel(
      merge(DEFAULT_ROLES, { director: true })
    );
    const assign = createAccountLevel(merge(DEFAULT_ROLES, { staff: true }));

    expect(assigner.level > assign.level).toBeTruthy();
  });

  it('director assign staff to be true', () => {
    const assign = createAccountLevel(merge(DEFAULT_ROLES, { director: true }));
    const assigner = createAccountLevel(merge(DEFAULT_ROLES, { staff: true }));

    expect(assigner.level > assign.level).toBeFalsy();
  });

  it('all roles except board assign board', () => {
    const assign = createAccountLevel(merge(DEFAULT_ROLES, { director: true }));
    const assigner = createAccountLevel(
      merge(DEFAULT_ROLES, {
        member: true,
        speaker: true,
        recruiter: true,
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
