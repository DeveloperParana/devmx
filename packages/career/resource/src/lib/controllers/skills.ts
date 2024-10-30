import {
  ApiPage,
  SkillDto,
  QueryParamsDto,
  Allowed,
} from '@devmx/shared-data-source';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import { Skill } from '@devmx/shared-api-interfaces';
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
  SkillsFacade,
  CreateSkillDto,
  UpdateSkillDto,
} from '@devmx/career-data-source';
import { escapeRegExp } from '@devmx/shared-util-data';

@ApiTags('Habilidadess')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsFacade: SkillsFacade) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: SkillDto })
  async create(@Body() data: CreateSkillDto) {
    try {
      return await this.skillsFacade.create(data);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(SkillDto)
  async findAll(@Query() params: QueryParamsDto<Skill>) {
    try {
      if (params.filter?.name) {
        params.filter.name = escapeRegExp(params.filter.name);
      }
      return await this.skillsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @Allowed()
  @ApiOkResponse({ type: SkillDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.skillsFacade.findOne(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SkillDto })
  async update(
    @Param('id') id: string,
    @Body() updateSkillDto: UpdateSkillDto
  ) {
    const skill = await this.skillsFacade.findOne(id);

    if (!skill) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }

    try {
      return await this.skillsFacade.update(id, updateSkillDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SkillDto })
  async remove(@Param('id') id: string) {
    const skill = await this.skillsFacade.findOne(id);

    if (!skill) {
      throw exceptionByError({
        code: 404,
        message: 'Oferta não encontrada',
      });
    }

    try {
      return await this.skillsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
