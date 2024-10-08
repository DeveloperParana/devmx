export abstract class Env {
  abstract production: boolean;

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

  abstract multer: {
    photos: {
      dest: string;
    };
    events: {
      covers: {
        dest: string;
      };
    };
  };

  abstract static: {
    rootPath: string;
  };
}
