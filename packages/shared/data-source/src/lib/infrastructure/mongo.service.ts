import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Model, Query, RootFilterQuery, SortOrder } from 'mongoose';
import {
  Entity,
  QuerySort,
  QueryParams,
  QueryFilter,
  EditableEntity,
} from '@devmx/shared-api-interfaces';

export abstract class MongoService<T extends Entity>
  implements EntityService<T>
{
  constructor(protected entityModel: Model<T>) {}

  protected applyPopulate<U>(
    query: Query<U, T>,
    method?: 'find' | 'findOne'
  ): Query<U, T> {
    return query;
  }

  protected applyFilter(filter: QueryFilter<T>): RootFilterQuery<T> {
    return { ...filter };
  }

  protected applySort(sort: QuerySort<T>) {
    const normalizedSort = {} as { [key: string]: SortOrder };

    for (const [key, direction] of Object.entries(sort)) {
      normalizedSort[key] = direction === 'asc' ? 1 : -1;
    }

    return normalizedSort;
  }

  protected applyEditableParser<U>(data: EditableEntity<T>) {
    return data as U;
  }

  async create(data: EditableEntity<T>) {
    const value = this.applyEditableParser(data);

    const created = new this.entityModel(value);

    return (await created.save()).toJSON() as T;
  }

  // async find(params: QueryParams<T> | QueryMongoParams<T>) {
  async find(params: QueryParams<T>) {
    const { page = 0, size = 10, filter, sort } = params;

    const skip = page * size;
    const where = this.applyFilter(filter ?? {});
    const order = this.applySort(sort ?? {});

    const query = this.entityModel
      .find(where)
      .sort(order)
      .skip(skip)
      .limit(size);

    const entities = await this.applyPopulate(query, 'find').exec();

    const data = entities.map((item) => item.toJSON() as T);
    const items = await this.entityModel.countDocuments(where).exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const query = this.entityModel.findById(id);

    const entity = await this.applyPopulate(query, 'findOne').exec();

    return entity ? (entity.toJSON() as T) : null;
  }

  async findOneBy<P extends keyof T>(prop: P, value: T[P]) {
    const filter = { [prop]: value } as RootFilterQuery<T>;
    const entity = await this.entityModel.findOne(filter).exec();

    return entity ? (entity.toJSON() as T) : null;
  }

  async update(id: string, data: EditableEntity<T>) {
    const value = this.applyEditableParser<T>(data);

    const updated = await this.entityModel
      .findOneAndUpdate({ _id: id }, value)
      .exec();

    return updated?.toJSON() as T;
  }

  async delete(id: string) {
    const entity = await this.entityModel.findOneAndDelete({ _id: id }).exec();

    if (!entity) {
      throw new Error(` ${id} not found`);
    }

    return entity.toJSON() as T;
  }
}
