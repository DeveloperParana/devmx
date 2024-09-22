import { FormArray, FormControl, FormGroup } from '@angular/forms';

type DetectType<T> = T extends Array<infer U>
  ? FormArray<DetectType<U>>
  : T extends object
  ? FormGroup<TypedForm<T>>
  : FormControl<T>;

export type TypedForm<T> = {
  [K in keyof T]: DetectType<T[K]>;
};
