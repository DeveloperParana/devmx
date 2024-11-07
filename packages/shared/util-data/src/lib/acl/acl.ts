import {
  Course,
  Event,
  Institution,
  JobOpening,
  Photo,
  Presentation,
  RSVP,
  Skill,
  Subject,
  User,
} from '@devmx/shared-api-interfaces';

export const actions = [
  'create',
  'read',
  'update',
  'delete',
  'invite',
  '*',
] as const;
export type Action = (typeof actions)[number];

interface ResourceMap {
  users: User;
  courses: Course;
  events: Event;
  institutions: Institution;
  jobOpenings: JobOpening;
  photos: Photo;
  presentations: Presentation;
  skills: Skill;
  subjects: Subject;
  rsvps: RSVP;
}

// export const resources = [
//   '*',
//   'Course',
//   'Event',
//   'Institution',
//   'JobOpening',
//   'Photo',
//   'Presentation',
//   'Skill',
//   'Subject',
//   'RSVP',
// ] as const;

export type Resource = keyof ResourceMap | `*`;

interface ResourceValidator<T> {
  (resource: T): boolean;
}

interface Permission {
  resource: keyof ResourceMap;
  action: Action;
}

interface Role {
  name: string;
  permissions: Permission[];
}

interface UserRole {
  id: string;
  roles: Role[];
}

export class ACL {
  #roles = new Map<string, Role>();

  addRole(name: string, permissions: Permission[]) {
    this.#roles.set(name, { name, permissions });
  }

  assignRole(user: UserRole, name: string) {
    const role = this.#roles.get(name);
    if (!role) {
      throw `Role ${name} not found`;
    }
    user.roles.push(role);
  }

  isAllowed(user: UserRole, resource: keyof ResourceMap, action: Action) {
    for (const role of user.roles) {
      if (this.hasPermission(role, resource, action)) {
        return true;
      }
    }

    return false;
  }

  hasPermission(role: Role, resource: keyof ResourceMap, action: Action) {
    return role.permissions.some((permission) => {
      return permission.resource === resource && permission.action === action;
    });
  }
}

const readUsers: Permission = { resource: 'users', action: 'read' };
const createUsers: Permission = { resource: 'users', action: 'create' };
const updateUsers: Permission = { resource: 'users', action: 'update' };
const deleteUsers: Permission = { resource: 'users', action: 'delete' };

const acl = new ACL();
