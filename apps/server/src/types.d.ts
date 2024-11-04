declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;

    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASS: string;

    JWT_SECRET: string;

    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USER: string;
    SMTP_PASS: string;

    CODE_LIFE_TIME: string

    NODE_ENV: 'production' | 'development';
  }
}
