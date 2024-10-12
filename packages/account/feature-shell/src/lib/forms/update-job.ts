import { TypedForm } from '@devmx/shared-ui-global/forms';
import { UpdateJob } from '@devmx/career-data-access';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormOption } from '@devmx/shared-ui-global';
import {
  ExperienceLevel,
  JobContract,
  JobMode,
  JobType,
} from '@devmx/shared-api-interfaces';

export class UpdateJobForm extends FormGroup<TypedForm<UpdateJob>> {
  types: FormOption<JobType>[] = [
    { value: 'contract', viewValue: 'Contrato' },
    { value: 'freelance', viewValue: 'Freelance' },
    { value: 'full-time', viewValue: 'Integral' },
    { value: 'part-time', viewValue: 'Meio periodo' },
  ];

  modes: FormOption<JobMode>[] = [
    { value: 'remote', viewValue: 'Remoto' },
    { value: 'hybrid', viewValue: 'Híbrido' },
    { value: 'office', viewValue: 'Presencial' },
  ];

  contracts: FormOption<JobContract>[] = [
    { value: 'CLT', viewValue: 'CLT' },
    { value: 'PJ', viewValue: 'PJ' },
  ];

  experiences: FormOption<ExperienceLevel>[] = [
    { value: 'internship', viewValue: 'Estagiário' },
    { value: 'junior', viewValue: 'Junior' },
    { value: 'mid', viewValue: 'Pleno' },
    { value: 'senior', viewValue: 'Senior' },
  ];

  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      type: new FormControl('contract', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      requirements: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      mode: new FormControl('hybrid', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      experience: new FormControl('internship', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      contract: new FormControl('CLT', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      salary: new FormGroup({
        min: new FormControl(),
        max: new FormControl(),
      }),
      city: new FormControl('', {
        nonNullable: true,
      }),
      link: new FormControl('', {
        nonNullable: true,
      }),
      contact: new FormControl('', {
        nonNullable: true,
      }),
      company: new FormControl('', {
        nonNullable: true,
      }),
      benefits: new FormControl('', {
        nonNullable: true,
      }),
      active: new FormControl(),
    });
  }
}
