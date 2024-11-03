import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthUser, Course } from '@devmx/shared-api-interfaces';
import { exceptionByError } from '@devmx/shared-resource';
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
  User,
  Roles,
  Allowed,
  ApiPage,
  authIsAdmin,
  QueryParamsDto,
} from '@devmx/shared-data-source';
import {
  CourseDto,
  CoursesFacade,
  CreateCourseDto,
  UpdateCourseDto,
} from '@devmx/academy-data-source';

@ApiTags('Cursos')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesFacade: CoursesFacade) {}

  @Post()
  @ApiBearerAuth()
  async create(@User('id') owner: string, @Body() data: CreateCourseDto) {
    try {
      return await this.coursesFacade.create({ ...data, owner });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(CourseDto)
  async findAll(@Query() params: QueryParamsDto<Course>) {
    try {
      return await this.coursesFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: CourseDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.coursesFacade.findOne(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Curso não encontrado',
      });
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CourseDto })
  @Roles(['director', 'manager', 'staff', 'leader', 'academic'])
  async update(
    @User() auth: AuthUser,
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto
  ) {
    const course = await this.coursesFacade.findOne(id);

    if (!course) {
      throw exceptionByError({
        code: 404,
        message: 'Curso não encontrado',
      });
    }

    if (course.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.coursesFacade.update(id, updateCourseDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CourseDto })
  @Roles(['director', 'manager', 'staff', 'leader', 'academic'])
  async remove(@User() auth: AuthUser, @Param('id') id: string) {
    const course = await this.coursesFacade.findOne(id);

    if (!course) {
      throw exceptionByError({
        code: 404,
        message: 'Curso não encontrado',
      });
    }

    if (course.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.coursesFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
