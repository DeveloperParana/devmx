import { Roles } from './roles';

export type AutoAssignableRoles = Pick<
  Roles,
  'member' | 'academic' | 'recruiter' | 'speaker'
>;
