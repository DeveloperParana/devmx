import { DEFAULT_ROLES, merge } from '@devmx/shared-util-data';

export const account = {
  name: {
    first: 'Guilherme',
    last: 'Siquinelli',
  },
  username: 'guiseek',
  password: '',
  email: 'guilherme@devpr.org',
  roles: merge(DEFAULT_ROLES, { member: true }),
  gender: 'male',
  photo: '9c14863726af550ff0666c128c32286a',
  minibio: '',
  birthday: '1986-12-29T02:00:00.000Z',
  active: true,
  city: {
    id: '',
    ibge: 4115200,
    name: 'Maringá',
    location: {
      type: 'Point',
      coordinates: [0, 0],
    },
    capital: false,
    ibgeState: 41,
    siafi: 7691,
    ddd: 44,
    timeZone: 'America/Sao_Paulo',
  },
  id: '66f706967d818c4004effb48',
};
