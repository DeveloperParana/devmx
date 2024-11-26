import { AboutUserSchema, User } from '@devmx/shared-api-interfaces';

export function toAboutUserSchema(user: User): AboutUserSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: user.displayName,
    // image: 'janedoe.jpg',
    // jobTitle: 'Professor',
    email: `mailto:${user.contact.email}`,
    url: `https://devparana.mx/sobre/${user.name}`,
  };
}
