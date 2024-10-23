export class StorageService {
  constructor(private storage: Storage) {}

  get length() {
    return this.storage.length;
  }

  getItem<T>(key: string, parse = false): T {
    const value = this.storage.getItem(key) ?? 'null';
    return parse ? JSON.parse(value) : value;
  }

  setItem<T>(key: string, data: T, stringify = false) {
    const value = stringify ? JSON.stringify(data) : String(data);
    this.storage.setItem(key, value);
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export function provideStorageService(storage: Storage = localStorage) {
  return {
    provide: StorageService,
    useFactory() {
      return new StorageService(storage);
    },
  };
}
