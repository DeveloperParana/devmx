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

  abstract multer: {
    photos: {
      dest: string;
    };
  };

  abstract static: {
    rootPath: string;
  };
}
