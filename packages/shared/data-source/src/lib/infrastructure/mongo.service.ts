import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Model, RootFilterQuery } from 'mongoose';
import {
  Entity,
  QueryParams,
  EditableEntity,
} from '@devmx/shared-api-interfaces';

export abstract class MongoService<T extends Entity>
  implements EntityService<T>
{
  constructor(private entityModel: Model<T>) {}

  async create(data: EditableEntity<T>) {
    const created = new this.entityModel(data);
    return created.save();
  }

  async find(params: QueryParams<T>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;
    const where = { ...filter };

    const entities = await this.entityModel
      .find(where)
      .skip(skip)
      .limit(size)
      .exec();

    const data = entities.map((item) => item.toJSON() as T);
    const items = await this.entityModel.countDocuments(where).exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const entity = await this.entityModel.findById(id).exec();

    return entity ? (entity.toJSON() as T) : null;
  }

  async findOneBy<P extends keyof T>(prop: P, value: T[P]) {
    const filter = { [prop]: value } as RootFilterQuery<T>;
    const entity = await this.entityModel.findOne(filter).exec();

    return entity ? (entity.toJSON() as T) : null;
  }

  async update(id: string, data: EditableEntity<T>) {
    const entity = await this.entityModel
      .findOneAndUpdate({ _id: id }, data as T)
      .exec();

    if (!entity) {
      throw new Error(` ${id} not found`);
    }

    return entity.toJSON() as T;
  }

  async delete(id: string) {
    const entity = await this.entityModel.findOneAndDelete({ _id: id }).exec();

    if (!entity) {
      throw new Error(` ${id} not found`);
    }

    return entity.toJSON() as T;
  }
}
