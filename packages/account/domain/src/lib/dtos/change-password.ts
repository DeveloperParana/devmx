export interface ChangePassword {
  id: string
  username?: string
  currentPassword: string;
  newPassword: string;
}
