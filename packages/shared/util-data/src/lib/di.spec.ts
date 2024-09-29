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
  abstract shout(): string;
}

class BImpl implements B {
  constructor(private a: A) {}

  shout() {
    const value = this.a.say().toUpperCase();
    return `${value.repeat(3)}!!!`;
  }
}

abstract class C {
  abstract shout(): boolean;
}

class CImpl implements C {
  constructor(private a: A, private b: B) {}

  shout() {
    return this.b.shout().indexOf(this.a.say().toUpperCase()) > -1;
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
      add: [A],
    });

    await add({
      for: C,
      use: CImpl,
      add: [A, B],
    });
  });

  it('should be AImpl', () => {
    const a = use(A);

    expect(a).toBeInstanceOf(AImpl);
    expect(a.say()).toBe('a');
  });

  it('should be BImpl with AImpl', () => {
    const b = use(B);

    expect(b).toBeInstanceOf(BImpl);
    expect(b.shout()).toBe('AAA!!!');
  });

  it('should be CImpl with AImpl and BImpl', () => {
    const c = use(C);

    expect(c).toBeInstanceOf(CImpl);
    expect(c.shout()).toBeTruthy()
  });
});
