import { UserSocial } from '@devmx/shared-api-interfaces';
import {
  radio,
  textbox,
  FormService,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

export function socialDialog(formService: FormService) {
  const fields: TypedFields<UserSocial> = {
    type: radio({
      order: 1,
      label: 'Tipo',
      options: [
        { value: 'website', text: 'Website' },
        { value: 'github', text: 'Github' },
        { value: 'linkedIn', text: 'Linked In' },
        { value: 'whatsApp', text: 'WhatsApp' },
        { value: 'notion', text: 'Notion' },
        { value: 'instagram', text: 'Instagram' },
      ],
      value: 'website',
    }),
    username: textbox({
      order: 2,
      label: 'Usuário ou URL',
      type: 'text',
      autocomplete: 'username',
      errors: {
        required: 'Obrigatório',
      },
    }),
  };

  const form = createFormGroup(fields);

  return {
    open: () => {
      return formService.open({ title: 'Social', fields, form }).afterClosed();
    },
  };
}
