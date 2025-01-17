import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthUser, JobOpening } from '@devmx/shared-api-interfaces';
import { exceptionByError } from '@devmx/shared-resource';
import {
  User,
  Roles,
  Allowed,
  ApiPage,
  authIsAdmin,
  QueryParamsDto,
} from '@devmx/shared-data-source';
import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
import {
  JobOpeningDto,
  JobOpeningsFacade,
  CreateJobOpeningDto,
  UpdateJobOpeningDto,
} from '@devmx/career-data-source';

@ApiTags('Vagas de emprego')
@Controller('job-openings')
export class JobOpeningsController {
  constructor(private readonly jobOpeningsFacade: JobOpeningsFacade) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: JobOpeningDto })
  async create(@User('id') owner: string, @Body() data: CreateJobOpeningDto) {
    try {
      return await this.jobOpeningsFacade.create({ ...data, owner });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(JobOpeningDto)
  async findAll(@Query() params: QueryParamsDto<JobOpening>) {
    try {
      return await this.jobOpeningsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @Allowed()
  @ApiOkResponse({ type: JobOpeningDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.jobOpeningsFacade.findOne(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: JobOpeningDto })
  async update(
    @User('id') owner: string,
    @Param('id') id: string,
    @Body() updateJobOpeningDto: UpdateJobOpeningDto
  ) {
    const jobOpening = await this.jobOpeningsFacade.findOne(id);

    if (!jobOpening) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }

    if (jobOpening.owner.id !== owner) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    if (!jobOpening) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }

    try {
      return await this.jobOpeningsFacade.update(id, updateJobOpeningDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: JobOpeningDto })
  @Roles(['director', 'manager', 'staff', 'recruiter'])
  async remove(@User() auth: AuthUser, @Param('id') id: string) {
    const jobOpening = await this.jobOpeningsFacade.findOne(id);

    if (!jobOpening) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }

    if (jobOpening.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.jobOpeningsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
