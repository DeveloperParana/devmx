export type AutoAssignableRole = 'member' | 'speaker';

export type SponsorRole = 'donor' | 'neighbor';

export type WorthyRole = 'leader' | 'staff' | 'fellow';

export type BoardRole = 'manager' | 'director';

export type RoleGroup = 'auto' | 'sponsor' | 'worthy' | 'board';

export type Role = AutoAssignableRole | SponsorRole | WorthyRole | BoardRole;

export type AccountRole = Record<Role, boolean>;
