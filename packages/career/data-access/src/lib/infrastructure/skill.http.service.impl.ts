import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { SkillService } from '@devmx/career-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { Skill } from '@devmx/shared-api-interfaces';

export class SkillHttpServiceImpl
  extends HttpService<Skill>
  implements SkillService {}

export function provideSkillHttpService() {
  return {
    provide: SkillService,
    useFactory(http: HttpClient, env: Env) {
      return new SkillHttpServiceImpl(http, env, 'skills');
    },
    deps: [HttpClient, Env],
  };
}
