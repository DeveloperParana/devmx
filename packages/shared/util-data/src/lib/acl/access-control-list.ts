// export const actions = [
//   'create',
//   'read',
//   'update',
//   'delete',
//   'invite',
//   '*',
// ] as const;
// export type Action = (typeof actions)[number];

// /**
//  * Resources available for users to act upon
//  *
//  * The '*' stands for 'all the options'
//  */
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
// export type Resource = (typeof resources)[number];

// export type Prediction<T> = (value: T) => boolean

// export type StrictPermission = {
//   resource: Resource;
//   actions: Action[];
//   validator?: Prediction<RBAC>
// };

// export const roles = [
//   'member',
//   'recruiter',
//   'academic',
//   'sponsor',
//   'worthy',
//   'board',
// ] as const;

// export type Role = (typeof roles)[number];

// export type RBAC = {
//   [key in Role]: StrictPermission[];
// };

// export const rbac: RBAC = {
//   board: [
//     {
//       resource: '*',
//       actions: ['*'],
//     },
//   ],
//   worthy: [
//     {
//       resource: '*',
//       actions: ['read', 'create', 'update', 'delete']
//     },
//   ],
//   academic: [
//     {
//       resource: 'Institution',
//       actions: ['read', 'create'],
//     },
//     {
//       resource: 'Institution',
//       actions: ['update', 'delete'],
//       validator: ()
//     }
//   ]
//   // standard: [
//   //   {
//   //     resource: 'User',
//   //     actions: ['*'],
//   //   },
//   //   {
//   //     resource: 'Site',
//   //     actions: ['create', 'read', 'update', 'delete'],
//   //   },
//   //   {
//   //     resource: 'Sale',
//   //     actions: ['*'],
//   //   },
//   //   {
//   //     resource: 'Product',
//   //     actions: ['*'],
//   //   },
//   // ],
//   // free: [
//   //   {
//   //     resource: 'User',
//   //     actions: ['read', 'invite'],
//   //   },
//   //   {
//   //     resource: 'Product',
//   //     actions: ['read'],
//   //   },
//   //   {
//   //     resource: 'Site',
//   //     actions: ['read'],
//   //   },
//   //   {
//   //     resource: 'Sale',
//   //     actions: ['read'],
//   //   },
//   // ],
// };
