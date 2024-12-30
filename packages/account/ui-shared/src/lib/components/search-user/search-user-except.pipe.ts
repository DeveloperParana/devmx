import { UserRef } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserExcept',
})
export class SearchUserExceptPipe implements PipeTransform {
  transform<U extends UserRef>(value: U[], except: U[] = []) {
    if (except.length === 0) return value;

    return value.filter((user) => except.some((u) => u.id !== user.id));
  }
}
