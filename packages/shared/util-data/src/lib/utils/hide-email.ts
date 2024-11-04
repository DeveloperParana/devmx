export function hideEmail(email: string) {
  const [user, domain] = email.split('@');

  const shade = user[0] + '*'.repeat(user.length - 2);

  const shadedUser = shade + user[user.length - 1];

  return `${shadedUser}@${domain}`;
}
