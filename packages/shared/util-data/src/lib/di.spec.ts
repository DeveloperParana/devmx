import { use, add } from './di';

abstract class A {
  abstract say(): 'a';
}

class AImpl implements A {
  say(): 'a' {
    return 'a';
  }
}

abstract class B {
  abstract shout(): string
}

class BImpl implements B {
  constructor(private a: A) {}

  shout() {
    const value = this.a.say().toUpperCase()
    return `${value.repeat(3)}!!!`
  }
}

describe('di', () => {
  beforeAll(async () => {
    await add({
      for: A,
      use: AImpl,
    });

    await add({
      for: B,
      use: BImpl,
      add: [A]
    });
  });

  it('should be AImpl', () => {
    const a = use(A);

    expect(a).toBeInstanceOf(AImpl);
    expect(a.say()).toBe('a')
  });

  it('should be BImpl with AImpl', () => {
    const b = use(B);

    expect(b).toBeInstanceOf(BImpl);
    expect(b.shout()).toBe('AAA!!!')
  });
});
