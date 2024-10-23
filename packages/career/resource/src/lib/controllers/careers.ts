import {
  ApiPage,
  JobDto,
  QueryParamsDto,
  User,
} from '@devmx/shared-data-source';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import { Job } from '@devmx/shared-api-interfaces';
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
  JobsFacade,
  CreateJobDto,
  CreatedJobDto,
  UpdateJobDto,
} from '@devmx/career-data-source';

@ApiBearerAuth()
@ApiTags('Carreiras')
@Controller('careers')
export class CareersController {
  constructor(private readonly jobsFacade: JobsFacade) {}

  @Post()
  @ApiOkResponse({ type: CreatedJobDto })
  async create(@User('id') owner: string, @Body() data: CreateJobDto) {
    try {
      return await this.jobsFacade.create({ ...data, owner });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @ApiPage(JobDto)
  async findAll(@Query() params: QueryParamsDto<Job>) {
    try {
      return await this.jobsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: JobDto })
  async findOne(@User('id') owner: string, @Param('id') id: string) {
    try {
      const job = await this.jobsFacade.findOne(id);

      if (!job.active && job.owner.id !== owner) {
        throw exceptionByError({ code: 403, message: 'Acesso negado' });
      }

      return job;
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: JobDto })
  async update(
    @User('id') owner: string,
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto
  ) {
    const job = await this.jobsFacade.findOne(id);

    if (!job) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }

    if (job.owner.id !== owner) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.jobsFacade.update(id, updateJobDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: JobDto })
  async remove(@User('id') owner: string, @Param('id') id: string) {
    const job = await this.jobsFacade.findOne(id);

    if (!job) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }

    if (job.owner.id !== owner) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.jobsFacade.remove(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
