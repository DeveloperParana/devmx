import { BehaviorSubject } from 'rxjs';

export function observer<T>(value: T) {
  const subject = new BehaviorSubject(value);

  const current = () => {
    return subject.value
  }

  const update = (value: T) => {
    subject.next(value);
  };

  const observe = () => {
    return subject.asObservable();
  };

  return { current, update, observe };
}
