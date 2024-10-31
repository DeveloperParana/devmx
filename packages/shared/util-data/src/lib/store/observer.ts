import { BehaviorSubject } from 'rxjs';

export function observer<T>(value: T) {
  const subject = new BehaviorSubject(value);

  const update = (value: T) => {
    subject.next(value);
  };

  const observe = () => {
    return subject.asObservable();
  };

  return { update, observe };
}
