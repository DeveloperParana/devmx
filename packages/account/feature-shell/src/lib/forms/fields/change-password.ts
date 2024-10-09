import { textbox, TypedFields } from '@devmx/shared-ui-global/forms';
import { ChangePassword } from '@devmx/account-data-access';
import { AccountOut } from '@devmx/shared-api-interfaces';

export const changePassword = (account: Pick<AccountOut, 'id' | 'username'>): TypedFields<ChangePassword> => ({
  id: textbox({
    label: 'Id',
    type: 'hidden',
    value: account.id,
  }),

  username: textbox({
    label: 'Usuário',
    type: 'hidden',
    value: account.username,
    errors: {
      required: 'Obrigatório',
    },
  }),

  currentPassword: textbox({
    label: 'Senha atual',
    type: 'password',
    autocomplete: 'current-password',
    errors: {
      required: 'Obrigatório',
    },
  }),

  newPassword: textbox({
    label: 'Nova senha',
    type: 'password',
    autocomplete: 'new-password',
    errors: {
      required: 'Obrigatório',
    },
  }),
});
