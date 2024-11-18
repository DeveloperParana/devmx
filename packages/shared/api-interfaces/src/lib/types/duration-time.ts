type OneToFive = 1 | 2 | 3 | 4 | 5;
type OneToNine = OneToFive | 6 | 7 | 8 | 9;

type DurationMinutes = `${OneToFive}0m`;

export type DurationTime =
  | DurationMinutes
  | `${OneToNine}h`
  | `${OneToNine}h e ${DurationMinutes}`;
