import { UserSocialForm } from './user-social';

describe('UserSocialForm', () => {
  let form: UserSocialForm;

  beforeAll(() => {
    form = new UserSocialForm();
  });

  it('should patch value', () => {
    form.patchValue([{ type: 'github', username: 'guiseek' }]);

    expect(form.value).toStrictEqual([{ type: 'github', username: 'guiseek' }]);
  });

  it('should remove item', () => {
    form.patchValue([{ type: 'linkedIn', username: 'guilhermesiquinelli' }]);

    expect(form.value.length).toBe(2);
  });

  it('should remove item', () => {
    form.patchValue([{ type: 'linkedIn', username: 'guilhermesiquinelli' }]);

    expect(form.value.length).toBe(2);
  });

  it('should remove item', () => {
    form.removeAt(1);

    expect(form.value.length).toBe(1);
  });
});
