import { QueryFilterDto, QueryParamsDto } from '@devmx/shared-data-source';
import { CitiesService } from '@devmx/account-domain/server';
import { City } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';

export class CitiesServiceImpl implements CitiesService {
  constructor(private cityModel: Model<City>) {}

  async find(params: QueryParamsDto<City>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;
    const where = { ...filter };
    const citys = await this.cityModel
      .find(where)
      .skip(skip)
      .limit(size)
      .exec();

    const data = citys.map((item) => item.toJSON());
    const items = await this.cityModel.countDocuments().exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const city = await this.cityModel.findById(id).exec();

    if (!city) {
      throw `Cidade não encontrada`;
    }

    return city.toJSON();
  }

  async findOneBy(filter: QueryFilterDto<City>) {
    return this.cityModel.findOne(filter).exec();
  }
}
