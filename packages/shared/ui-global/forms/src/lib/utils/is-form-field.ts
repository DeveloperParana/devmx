import { Checkbox, Datepicker, Dropdown, Radio, Textbox } from '../fields';
import { FormField } from '../types';

export const isFormField = (field: object): field is FormField => {
  const isTextbox = field instanceof Textbox;
  const isCheckbox = field instanceof Checkbox;
  const isDatepicker = field instanceof Datepicker;
  const isDropdown = field instanceof Dropdown;
  const isRadio = field instanceof Radio;

  return isTextbox || isCheckbox || isDatepicker || isDropdown || isRadio;
};
