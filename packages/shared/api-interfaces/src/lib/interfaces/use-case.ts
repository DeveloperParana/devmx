import { Observable } from 'rxjs';

export interface UseCase<I, O> {
  execute(input: I): Promise<O> | Observable<O>;
}
