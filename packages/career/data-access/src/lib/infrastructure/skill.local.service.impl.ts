import { SkillService } from '@devmx/career-domain/client';
import { Skill } from '@devmx/shared-api-interfaces';
import {
  LocalService,
  StorageService,
  createServiceProvider,
} from '@devmx/shared-data-access';

export class SkillLocalServiceImpl
  extends LocalService<Skill>
  implements SkillService {}

export function provideSkillLocalService() {
  return createServiceProvider(SkillService, SkillLocalServiceImpl, [
    StorageService,
    'skills',
  ]);
}
