import { Allowed, ApiPage, QueryParamsDto } from '@devmx/shared-data-source';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import { Subject } from '@devmx/shared-api-interfaces';
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
  SubjectDto,
  SubjectsFacade,
  CreateSubjectDto,
  UpdateSubjectDto,
} from '@devmx/academy-data-source';

@ApiTags('Assuntos')
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsFacade: SubjectsFacade) {}

  @Post()
  @ApiBearerAuth()
  async create(@Body() data: CreateSubjectDto) {
    try {
      return await this.subjectsFacade.create(data);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(SubjectDto)
  async findAll(@Query() params: QueryParamsDto<Subject>) {
    try {
      return await this.subjectsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: SubjectDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.subjectsFacade.findOne(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Assunto não encontrado',
      });
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SubjectDto })
  async update(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto
  ) {
    const subject = await this.subjectsFacade.findOne(id);

    if (!subject) {
      throw exceptionByError({
        code: 404,
        message: 'Assunto não encontrado',
      });
    }

    try {
      return await this.subjectsFacade.update(id, updateSubjectDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SubjectDto })
  async remove(@Param('id') id: string) {
    const subject = await this.subjectsFacade.findOne(id);

    if (!subject) {
      throw exceptionByError({
        code: 404,
        message: 'Assunto não encontrado',
      });
    }

    try {
      return await this.subjectsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
