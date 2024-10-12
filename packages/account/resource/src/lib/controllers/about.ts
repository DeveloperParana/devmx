import { AboutFacade, AccountDto } from '@devmx/account-data-source';
import { exceptionByError } from '@devmx/shared-resource';
import { Controller, Get, Param } from '@nestjs/common';
import { Allowed } from '@devmx/shared-data-source';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Sobre')
@Controller('about')
export class AboutController {
  constructor(private aboutFacade: AboutFacade) {}

  @Allowed()
  @Get(':username')
  @ApiOkResponse({ type: AccountDto })
  async findAbout(@Param('username') username: string) {
    try {
      return await this.aboutFacade.findAboutAccount(username);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
