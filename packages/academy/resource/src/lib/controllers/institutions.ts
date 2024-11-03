import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Institution } from '@devmx/shared-api-interfaces';
import { exceptionByError } from '@devmx/shared-resource';
import {
  Roles,
  Allowed,
  ApiPage,
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
  InstitutionDto,
  InstitutionsFacade,
  CreateInstitutionDto,
  UpdateInstitutionDto,
} from '@devmx/academy-data-source';

@ApiTags('Instituições')
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsFacade: InstitutionsFacade) {}

  @Post()
  @ApiBearerAuth()
  async create(@Body() data: CreateInstitutionDto) {
    try {
      return await this.institutionsFacade.create(data);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(InstitutionDto)
  async findAll(@Query() params: QueryParamsDto<Institution>) {
    try {
      return await this.institutionsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: InstitutionDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.institutionsFacade.findOne(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Instituição não encontrada',
      });
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: InstitutionDto })
  @Roles(['director', 'manager', 'staff', 'leader', 'academic'])
  async update(
    @Param('id') id: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto
  ) {
    const institution = await this.institutionsFacade.findOne(id);

    if (!institution) {
      throw exceptionByError({
        code: 404,
        message: 'Instituição não encontrada',
      });
    }

    try {
      return await this.institutionsFacade.update(id, updateInstitutionDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: InstitutionDto })
  @Roles(['director', 'manager', 'staff', 'leader', 'academic'])
  async remove(@Param('id') id: string) {
    const institution = await this.institutionsFacade.findOne(id);

    if (!institution) {
      throw exceptionByError({
        code: 404,
        message: 'Instituição não encontrada',
      });
    }

    try {
      return await this.institutionsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
