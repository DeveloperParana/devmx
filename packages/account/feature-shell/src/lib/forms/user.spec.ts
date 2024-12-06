import { UserForm } from './user';

describe('UserRolesForm', () => {
  let form: UserForm;

  beforeEach(() => {
    form = new UserForm();
  });

  it('contact: should be invalid value', () => {
    form.contact.patchValue({ phone: '' });

    expect(form.contact.valid).toBeFalsy();
  });

  it('contact: should be invalid email', () => {
    form.contact.patchValue({ email: 'nome' });

    expect(form.contact.valid).toBeFalsy();
  });

  it('contact: should be invalid phone error', () => {
    form.contact.patchValue({ phone: '44' });

    expect(form.contact.controls.phone?.errors).toStrictEqual({
      invalidPhone: { value: '44' },
    });
  });

  it('contact: should be invalid phone', () => {
    form.contact.patchValue({ email: 'nome@email.com', phone: '44' });

    expect(form.contact.valid).toBeFalsy();
  });

  it('contact: should be valid email', () => {
    form.contact.patchValue({ email: 'nome@email.com' });

    expect(form.contact.valid).toBeTruthy();
  });

  it('contact: should be valid email and phone', () => {
    form.contact.patchValue({
      email: 'nome@email.com',
      phone: '(44) 00000-0000',
    });

    expect(form.contact.valid).toBeTruthy();
  });

  it('profile: should be invalid value', () => {
    form.profile.patchValue({ gender: 'male' });

    expect(form.profile.valid).toBeTruthy();
  });

  it('profile: should be invalid minibio', () => {
    form.profile.patchValue({ minibio: '.'.repeat(102401) });

    expect(form.profile.valid).toBeFalsy();
  });

  it('profile: should be invalid minibio error', () => {
    form.profile.patchValue({ minibio: '.'.repeat(102401) });

    expect(form.profile.controls.minibio?.errors).toStrictEqual({
      maxlength: {
        actualLength: 102401,
        requiredLength: 102400,
      },
    });
  });

  it('should be invalid', () => {
    form.roles.patchValue({ member: false });

    expect(form.roles.valid).toBeFalsy();
  });

  it('should be error', () => {
    form.roles.patchValue({ member: false });

    expect(form.roles.controls.member.errors).toStrictEqual({ required: true });
  });

  it('should be invalid', () => {
    form.roles.patchValue({ member: true });

    expect(form.roles.value).toStrictEqual({
      member: true,
      academic: false,
      recruiter: false,
      speaker: false,
    });
  });

  it('should be valid', () => {
    form.roles.patchValue({ member: true });

    expect(form.roles.valid).toBeTruthy();
  });

  it('should be error null', () => {
    form.roles.patchValue({ member: true });

    expect(form.roles.controls.member.errors).toBeNull();
  });

  it('should be only auto atributed', () => {
    form.roles.patchValue({
      member: false,
      academic: false,
      recruiter: false,
      speaker: false,
      donor: false,
      neighbor: false,
      leader: false,
      staff: false,
      fellow: false,
      manager: false,
      director: false,
    });

    expect(form.roles.value).toStrictEqual({
      member: false,
      academic: false,
      recruiter: false,
      speaker: false,
    });
  });
});
