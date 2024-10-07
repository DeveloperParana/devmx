export abstract class Env {
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
}
