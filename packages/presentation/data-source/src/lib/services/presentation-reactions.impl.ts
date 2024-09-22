import { PresentationReactionsService } from '@devmx/account-domain/server';
import { QueryFilterDto, QueryParamsDto } from '@devmx/shared-data-source';
import { PresentationReaction } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';
import {
  CreatePresentationReactionDto,
  UpdatePresentationReactionDto,
} from '../dtos';

export class PresentationReactionsServiceImpl implements PresentationReactionsService {
  constructor(private presentationReactionModel: Model<PresentationReaction>) {}

  async create(
    data: CreatePresentationReactionDto
  ): Promise<PresentationReaction> {
    const createdPresentationReaction = new this.presentationReactionModel(
      data
    );
    return (await createdPresentationReaction.save()).toJSON();
  }

  async find(params: QueryParamsDto<PresentationReaction>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;
    const where = { ...filter };
    const comments = await this.presentationReactionModel
      .find(where)
      .skip(skip)
      .limit(size)
      .populate('account')
      .exec();

    const data = comments.map((item) => item.toJSON());
    const items = await this.presentationReactionModel.countDocuments().exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const comment = await this.presentationReactionModel
      .findById(id)
      .populate('account')
      .exec();

    if (!comment) {
      throw `Reação não encontrada`;
    }

    return comment.toJSON();
  }

  async findOneBy(filter: QueryFilterDto<PresentationReaction>) {
    const comment = await this.presentationReactionModel
      .findOne(filter)
      .populate('account')
      .exec();

    if (!comment) {
      throw `Reação não encontrada`;
    }

    return comment.toJSON();
  }

  async update(id: string, data: UpdatePresentationReactionDto) {
    const comment = await this.presentationReactionModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    if (!comment) {
      throw `Erro ao alterar reação`;
    }

    return comment.toJSON();
  }

  async remove(id: string) {
    const comment = await this.presentationReactionModel
      .findOneAndDelete({ _id: id })
      .exec();

    if (!comment) {
      throw `Erro ao remover reação`;
    }

    return comment.toJSON();
  }
}
