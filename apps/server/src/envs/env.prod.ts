import { join } from 'node:path';

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI environment variable is not set');
}

export const env = {
  production: true,
  origin: 'https://devparana.mx',
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  github: {
    token: process.env.GITHUB_TOKEN ?? '',
  },
  auth: {
    codeLifeTime: +process.env.CODE_LIFE_TIME,
  },
  multer: {
    photos: {
      dest: 'assets/photos',
    },
    events: {
      covers: {
        dest: 'assets/events/covers',
      },
    },
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    // secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
  static: {
    rootPath: join(__dirname, 'assets'),
  },
};
