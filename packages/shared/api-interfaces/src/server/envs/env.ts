export abstract class Env {
  abstract production: boolean;

  abstract origin: string;

  abstract db: {
    name: string;
    host: string;
    port: string;
    user: string;
    pass: string;
  };

  abstract mongo: {
    uri: string;
  };

  abstract jwt: {
    secret: string;
  };

  abstract auth: {
    codeLifeTime: number;
  };

  abstract github: {
    token: string;
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

  abstract smtp: {
    host: string;
    port: number;
    // secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  };

  abstract static: {
    rootPath: string;
  };
}
