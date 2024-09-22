import { QueryFilterDto, QueryParamsDto } from '@devmx/shared-data-source';
import { CreatePresentationDto, UpdatePresentationDto } from '../dtos';
import { PresentationsService } from '@devmx/account-domain/server';
import { Presentation } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';

export class PresentationsServiceImpl implements PresentationsService {
  constructor(private presentationModel: Model<Presentation>) {}

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
    const items = await this.presentationModel.countDocuments().exec();
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
