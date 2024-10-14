import { FilterPresentation } from '@devmx/presentation-data-access';
import {
  textbox,
  dropdown,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

export const searchPresentationsFields: TypedFields<FilterPresentation> = {
  title: textbox({
    order: 1,
    label: 'Nome',
    type: 'text',
  }),
  format: dropdown({
    order: 1,
    label: 'Formato',
    options: [
      { value: 'talk', text: 'Palestra' },
      { value: 'workshop', text: 'Oficina' },
      { value: 'webinar', text: 'Webinar' },
    ],
  }),
};

export const searchPresentationsControls = createFormGroup(
  searchPresentationsFields
);
