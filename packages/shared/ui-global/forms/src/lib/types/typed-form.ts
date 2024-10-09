import { FormArray, FormControl, FormGroup } from '@angular/forms';

type DetectType<T> = T extends Array<infer U>
  ? FormArray<DetectType<U>> | FormControl<string[]>
  : T extends object
  ? FormGroup<TypedForm<T>>
  : T extends false | true
  ? FormControl<boolean>
  : FormControl<T>;

export type TypedForm<T> = {
  [K in keyof T]: DetectType<T[K]>;
};
