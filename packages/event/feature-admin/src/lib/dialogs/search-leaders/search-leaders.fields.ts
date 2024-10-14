import { FilterAccount } from '@devmx/account-data-access';
import {
  textbox,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

export const searchLeadersFields: TypedFields<FilterAccount> = {
  name: textbox({
    order: 1,
    label: 'Nome',
    type: 'text',
  }),
  username: textbox({
    label: 'Usuário',
    type: 'text',
    order: 2,
  }),
};

export const searchLeadersControls = createFormGroup(searchLeadersFields);
