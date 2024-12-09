export abstract class Env {
  abstract prod: boolean

  abstract api: {
    url: string;
  };

  abstract photos: {
    url: string;
  };

  abstract covers: {
    events: {
      url: string;
    };
  };

  abstract googleTag: string
}
