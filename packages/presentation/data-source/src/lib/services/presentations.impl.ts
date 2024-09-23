import { PresentationsService } from '@devmx/presentation-domain/server';
import { CreatePresentationDto, UpdatePresentationDto } from '../dtos';
import { Presentation } from '@devmx/shared-api-interfaces';
import { PresentationCollection } from '../schemas';
import { Model } from 'mongoose';
import {
  objectId,
  QueryFilterDto,
  QueryParamsDto,
} from '@devmx/shared-data-source';

export class PresentationsServiceImpl implements PresentationsService {
  constructor(private presentationModel: Model<PresentationCollection>) {}

  async create(data: CreatePresentationDto): Promise<Presentation> {
    const createdPresentation = new this.presentationModel(data);
    return (await createdPresentation.save()).toJSON();
  }

  async find(params: QueryParamsDto<Presentation>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;

    const where = { ...filter };

    const presentations = await this.presentationModel
      .find(where)
      .skip(skip)
      .limit(size)
      .populate('account')
      .exec();

    const data = presentations.map((item) => item.toJSON());
    const items = await this.presentationModel.countDocuments(where).exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const presentation = await this.presentationModel
      .findById(id)
      .populate('account')
      .exec();

    if (!presentation) {
      throw `Apresentação não encontrada`;
    }

    return presentation.toJSON();
  }

  async findByAccount(accountId: string, params: QueryParamsDto<Presentation>) {
    const { page = 0, size = 10, filter } = params;
    const skip = page * size;

    const account = objectId(accountId);

    const presentations = await this.presentationModel
      .find({ ...filter, account })
      .skip(skip)
      .limit(size)
      .populate('account')
      .exec();

    const data = presentations.map((item) => item.toJSON());
    const items = await this.presentationModel
      .countDocuments({ ...filter, account })
      .exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOneBy(filter: QueryFilterDto<Presentation>) {
    const presentation = await this.presentationModel
      .findOne(filter)
      .populate('account')
      .exec();

    if (!presentation) {
      throw `Apresentação não encontrada`;
    }

    return presentation.toJSON();
  }

  async update(id: string, data: UpdatePresentationDto) {
    const presentation = await this.presentationModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    if (!presentation) {
      throw `Erro ao alterar apresentação`;
    }

    return presentation.toJSON();
  }

  async remove(id: string) {
    const presentation = await this.presentationModel
      .findOneAndDelete({ _id: id })
      .exec();

    if (!presentation) {
      throw `Erro ao remover apresentação`;
    }

    return presentation.toJSON();
  }
}
