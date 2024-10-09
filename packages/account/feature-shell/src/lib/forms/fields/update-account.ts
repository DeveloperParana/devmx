import { datepicker, textbox, TypedFields } from '@devmx/shared-ui-global/forms';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { UpdateAccount } from '@devmx/account-data-access';

export const updateAccount = (
  account: AccountOut
): TypedFields<UpdateAccount> => ({
  id: textbox({
    label: 'id',
    type: 'hidden',
    value: account.id
  }),

  username: textbox({
    label: 'Usuário',
    type: 'text',
    order: 2,
    value: account.username
  }),
  email: textbox({
    label: 'Endereço de e-mail',
    type: 'email',
    order: 3,
    value: account.email
  }),
  minibio: textbox({
    label: 'Minibio',
    type: 'text',
    order: 4,
    value: account.minibio
  }),
  birthday: datepicker({
    label: 'Data de nascimento',
    value: account.birthday,
    order: 5,
  }),
  name: {
    first: textbox({
      label: 'Primeiro nome',
      type: 'text',
      order: 1,
      autocomplete: 'given-name',
      value: account.name.first
    }),
    last: textbox({
      label: 'Último nome',
      type: 'text',
      order: 2,
      autocomplete: 'family-name',
      value: account.name.last
    }),
  },
});
