import { CitiesService } from '@devmx/location-domain/server';
import { QueryParamsDto } from '@devmx/shared-data-source';
import { LocationFilter } from '@devmx/location-domain';
import { City } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';

export class CitiesServiceImpl implements CitiesService {
  constructor(private cityModel: Model<City>) {}

  async find(params: QueryParamsDto<City>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;
    const where = { ...filter };
    const cities = await this.cityModel
      .find(where)
      .skip(skip)
      .limit(size)
      .exec();

    const data = cities.map((item) => item.toJSON());
    const items = await this.cityModel.countDocuments().exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async search(name: string) {
    const cities = await this.cityModel
      .find({ name: new RegExp('^' + name, 'i') })
      .exec();

    return cities.map((item) => item.toJSON());
  }

  async findOne(id: string) {
    const city = await this.cityModel.findById(id).exec();
    return city ? city.toJSON() : null;
  }

  async findByLocation({ lat, lng, max, min }: LocationFilter) {
    const cities = await this.cityModel
      .find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [lat, lng],
            },
            $maxDistance: max,
            $minDistance: min,
          },
        },
      })
      .exec();

    return cities.map((item) => item.toJSON());
  }
}
