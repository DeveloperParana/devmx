import { GithubFacade } from '@devmx/shared-data-source';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Github')
@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubFacade) {}

  @Get('contributors/:repo')
  async contributors(@Param('repo') repo: string) {
    if (!repo) {
      throw new BadRequestException('Informe um repositório');
    }

    return this.githubService.findRepoContributors(repo);
  }

  @Get('issues/:repo')
  async issues(@Param('repo') repo: string) {
    if (!repo) {
      throw new BadRequestException('Informe um repositório');
    }

    return this.githubService.findRepoIssues(repo);
  }
}
