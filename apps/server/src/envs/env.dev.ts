import { join } from 'node:path';

export const env = {
  production: false,
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  multer: {
    photos: {
      dest: 'assets/server/photos',
    },
    events: {
      covers: {
        dest: 'assets/server/events/covers',
      },
    },
  },
  static: {
    rootPath: join(__dirname, '..', '..', '..', 'assets', 'server'),
  },
};
