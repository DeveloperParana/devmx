import { Pipe, PipeTransform } from '@angular/core';

export type ShadowFor = 'phone' | 'email' | 'date' | 'name';

@Pipe({ name: 'shadow' })
export class ShadowPipe implements PipeTransform {
  transform(value?: string | number, kind: ShadowFor = 'phone') {
    if (!value) return;
    switch (kind) {
      default:
      case 'phone': {
        const obfuscated = '#'.repeat(Math.max(0, String(value).length - 6));
        const visible = String(value).slice(-6);
        return obfuscated + visible;
      }
      case 'email': {
        const [user, domain] = String(value).split('@');
        const shade = user[0] + '#'.repeat(user.length - 2);
        const shadedUser = shade + user[user.length - 1];
        return `${shadedUser}@${domain}`;
      }
    }
  }
}
