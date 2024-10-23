export type TransitionDuration = `${number}ms` | `${number}s`;

export type TransitionTimingFunction =
  `cubic-bezier(${number}, ${number}, ${number}, ${number})`;

export type TransitionTiming =
  | `ease`
  | `ease-in`
  | `ease-in-out`
  | `ease-out`
  | `step-start`
  | `step-end`
  | `steps`
  | `linear`
  | `start`
  | `end`
  | TransitionTimingFunction;
