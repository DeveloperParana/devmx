import { CreateUser, ValidateUserCode } from '../../lib/dtos';
import { Observable } from 'rxjs';
import {
  User,
  AccessToken,
  Authentication,
  ResponseMessage,
} from '@devmx/shared-api-interfaces';

export abstract class AuthenticationService {
  abstract load(): Observable<Authentication>;

  abstract createUser(data: CreateUser): Observable<User>;

  abstract sendUserCode(name: string): Observable<ResponseMessage>;

  abstract validateUserCode(name: ValidateUserCode): Observable<AccessToken>;
}
