import { EditableEntity, Entity } from '@devmx/shared-api-interfaces';
import { EntityService } from '@devmx/shared-api-interfaces/server';
import { QueryParamsDto } from '../dtos';

export class EntityFacade<T extends Entity> {
  constructor(protected service: EntityService<T>) {}

  create(data: EditableEntity<T>) {
    return this.service.create(data);
  }

  find(params: QueryParamsDto<T>) {
    return this.service.find(params);
  }

  findOne(id: string) {
    return this.service.findOne(id);
  }

  update(id: string, data: EditableEntity<T>) {
    return this.service.update(id, data);
  }

  delete(id: string) {
    return this.service.delete(id);
  }
}
