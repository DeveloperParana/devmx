import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Skill } from '@devmx/shared-api-interfaces';
import {
  ApiPage,
  Allowed,
  SkillDto,
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
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  SkillsFacade,
  CreateSkillDto,
  UpdateSkillDto,
} from '@devmx/learn-data-source';

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
      throw new BadRequestException(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(SkillDto)
  async findAll(@Query() params: QueryParamsDto<Skill>) {
    return await this.skillsFacade.find(params);
  }

  @Get(':id')
  @Allowed()
  @ApiOkResponse({ type: SkillDto })
  async findOne(@Param('id') id: string) {
    const skill = await this.skillsFacade.findOne(id);

    if (!skill) {
      throw new NotFoundException('Habilidade não encontrada');
    }

    return skill;
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
      throw new NotFoundException('Habilidade não encontrada');
    }

    try {
      return await this.skillsFacade.update(id, updateSkillDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SkillDto })
  async remove(@Param('id') id: string) {
    const skill = await this.skillsFacade.findOne(id);

    if (!skill) {
      throw new NotFoundException('Habilidade não encontrada');
    }

    try {
      return await this.skillsFacade.delete(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
