export function createMail(
  to: string,
  html: string,
  subject = `DevParana.mx`,
  from = 'nao-responder@devparana.mx'
) {
  subject = subject === 'DevParana.mx' ? subject : `${subject} - DevParana.mx`;

  return { from, to, subject, html };
}
