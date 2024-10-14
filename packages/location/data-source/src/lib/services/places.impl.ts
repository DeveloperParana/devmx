import { QueryFilterDto, QueryParamsDto } from '@devmx/shared-data-source';
import { PlacesService } from '@devmx/location-domain/server';
import { CreateLocationDto, CreatePlaceDto, UpdatePlaceDto } from '../dtos';
import { LocationFilter } from '@devmx/location-domain';
import { Place } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';

function mapLocation(data: CreateLocationDto) {
  return { type: 'Point', coordinates: [data.lat, data.lng] };
}

function mapPlaceFromCreate(data: CreatePlaceDto) {
  const location = mapLocation(data.location);
  return { ...data, location };
}

export class PlacesServiceImpl implements PlacesService {
  constructor(private placeModel: Model<Place>) {}

  async create(data: CreatePlaceDto): Promise<Place> {
    const place = mapPlaceFromCreate(data);
    const createdPlace = new this.placeModel(place);
    return (await createdPlace.save()).toJSON();
  }

  async find(params: QueryParamsDto<Place>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;
    const where = { ...filter };
    const places = await this.placeModel
      .find(where)
      .populate({ path: 'creator', select: 'name username photo' })
      .skip(skip)
      .limit(size)
      .exec();

    const data = places.map((item) => item.toJSON());
    const items = await this.placeModel.countDocuments(where).exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async search(name: string) {
    const places = await this.placeModel
      .find({ name: new RegExp('^' + name, 'i') })
      .exec();

    return places.map((item) => item.toJSON());
  }

  async findOne(id: string) {
    const place = await this.placeModel.findById(id).exec();
    return place ? place.toJSON() : null;
  }

  async findOneBy(filter: QueryFilterDto<Place>) {
    const place = await this.placeModel.findOne(filter).exec();

    return place ? place.toJSON() : null;
  }

  async findByLocation({ lat, lng, max, min }: LocationFilter) {
    const places = await this.placeModel
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

    return places.map((item) => item.toJSON());
  }

  async update(id: string, data: UpdatePlaceDto) {
    const place = await this.placeModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    return place ? place.toJSON() : null;
  }

  async remove(id: string) {
    const place = await this.placeModel.findOneAndDelete({ _id: id }).exec();

    return place ? place.toJSON() : null;
  }
}
