import { CreateJob } from '@devmx/account-data-access';
import {
  textbox,
  checkbox,
  dropdown,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

const fields: TypedFields<CreateJob> = {
  title: textbox({
    order: 1,
    label: 'Vaga',
    type: 'text',
    errors: {
      required: 'Obrigatório',
    },
  }),
  description: textbox({
    order: 2,
    label: 'Detalhes',
    type: 'long',
    errors: {
      required: 'Obrigatório',
    },
  }),
  type: dropdown({
    order: 3,
    label: 'Formato',
    options: [
      { value: 'contract', text: 'Contrato' },
      { value: 'freelance', text: 'Contrato' },
      { value: 'full-time', text: 'Integral' },
      { value: 'part-time', text: 'Meio periodo' },
    ],
    errors: {
      required: 'Obrigatório',
    },
  }),
  contract: dropdown({
    order: 4,
    label: 'Contrato',
    options: [
      { value: 'CLT', text: 'CLT' },
      { value: 'PJ', text: 'PJ' },
    ],
    errors: {
      required: 'Obrigatório',
    },
  }),
  experience: dropdown({
    order: 5,
    label: 'Experiência',
    options: [
      { value: 'junior', text: 'Junior' },
      { value: 'mid', text: 'Pleno' },
      { value: 'senior', text: 'Senior' },
    ],
    errors: {
      required: 'Obrigatório',
    },
  }),
  mode: dropdown({
    order: 6,
    label: 'Regime de trabalho',
    options: [
      { value: 'remote', text: 'Remoto' },
      { value: 'hybrid', text: 'Híbrido' },
      { value: 'office', text: 'Presencial' },
    ],
    errors: {
      required: 'Obrigatório',
    },
  }),
  requirements: textbox({
    order: 7,
    label: 'Requisitos',
    type: 'long',
    errors: {
      required: 'Obrigatório',
    },
  }),
  active: checkbox({
    order: 8,
    label: 'Aberta',
    value: true,
  }),
};

const form = createFormGroup(fields)

export const createJob = { fields, form }
