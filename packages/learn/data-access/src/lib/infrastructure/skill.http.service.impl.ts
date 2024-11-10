import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { SkillService } from '@devmx/learn-domain/client';
import { Skill } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';

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
