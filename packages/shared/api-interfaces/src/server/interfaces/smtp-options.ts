interface SMTPAuth {
  user: string;
  pass: string;
}

export interface SMTPOptions {
  host: string;
  port: number;
  secure: boolean;
  auth: SMTPAuth;
}
