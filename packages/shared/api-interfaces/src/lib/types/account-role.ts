export type AutoAssignableRole = 'member' | 'speaker';

export type RecruiterRole = 'recruiter';

export type AcademicRole = 'academic';

export type SponsorRole = 'donor' | 'neighbor';

export type WorthyRole = 'leader' | 'staff' | 'fellow';

export type BoardRole = 'manager' | 'director';

export type RoleGroup = 'auto' | 'academic' | 'recruiter' | 'sponsor' | 'worthy' | 'board';

export type Role =
  | AutoAssignableRole
  | AcademicRole
  | RecruiterRole
  | SponsorRole
  | WorthyRole
  | BoardRole;

export type AccountRole = Record<Role, boolean>;

// export type Roles = {
//   member: boolean;
//   academic: boolean;
//   recruiter: boolean;
//   speaker: boolean;
//   donor: boolean;
//   neighbor: boolean;
//   leader: boolean;
//   staff: boolean;
//   fellow: boolean;
//   manager: boolean;
//   director: boolean;
// };
