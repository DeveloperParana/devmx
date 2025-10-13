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

  it('name: should be valid with lowercase letters and numbers', () => {
    form.patchValue({ name: 'usuario123' });

    expect(form.controls.name.valid).toBeTruthy();
    expect(form.controls.name.errors).toBeNull();
  });

  it('name: should be valid with only lowercase letters', () => {
    form.patchValue({ name: 'usuario' });

    expect(form.controls.name.valid).toBeTruthy();
    expect(form.controls.name.errors).toBeNull();
  });

  it('name: should be valid with only numbers', () => {
    form.patchValue({ name: '123456' });

    expect(form.controls.name.valid).toBeTruthy();
    expect(form.controls.name.errors).toBeNull();
  });

  it('name: should be invalid with uppercase letters', () => {
    form.patchValue({ name: 'Usuario' });

    expect(form.controls.name.valid).toBeFalsy();
    expect(form.controls.name.errors).toStrictEqual({ pattern: { actualValue: 'Usuario', requiredPattern: '^[a-z0-9]+$' } });
  });

  it('name: should be invalid with spaces', () => {
    form.patchValue({ name: 'meu usuario' });

    expect(form.controls.name.valid).toBeFalsy();
    expect(form.controls.name.errors).toStrictEqual({ pattern: { actualValue: 'meu usuario', requiredPattern: '^[a-z0-9]+$' } });
  });

  it('name: should be invalid with special characters', () => {
    form.patchValue({ name: 'usuario@123' });

    expect(form.controls.name.valid).toBeFalsy();
    expect(form.controls.name.errors).toStrictEqual({ pattern: { actualValue: 'usuario@123', requiredPattern: '^[a-z0-9]+$' } });
  });

  it('name: should be invalid with hyphens', () => {
    form.patchValue({ name: 'meu-usuario' });

    expect(form.controls.name.valid).toBeFalsy();
    expect(form.controls.name.errors).toStrictEqual({ pattern: { actualValue: 'meu-usuario', requiredPattern: '^[a-z0-9]+$' } });
  });

  it('name: should be invalid with underscores', () => {
    form.patchValue({ name: 'meu_usuario' });

    expect(form.controls.name.valid).toBeFalsy();
    expect(form.controls.name.errors).toStrictEqual({ pattern: { actualValue: 'meu_usuario', requiredPattern: '^[a-z0-9]+$' } });
  });

  it('name: should be invalid when empty (required)', () => {
    form.patchValue({ name: '' });

    expect(form.controls.name.valid).toBeFalsy();
    expect(form.controls.name.errors).toStrictEqual({ required: true });
  });
});
