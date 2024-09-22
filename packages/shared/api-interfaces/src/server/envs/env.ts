export abstract class Env {
  abstract db: {
    name: string;
    host: string;
    port: string;
    user: string;
    pass: string;
  };

  abstract jwt: {
    secret: string;
  };
}
