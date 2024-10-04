import { PresentationReactionsService } from '@devmx/presentation-domain/server';
import { QueryFilterDto, QueryParamsDto } from '@devmx/shared-data-source';
import { PresentationReaction } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';
import {
  CreatePresentationReactionDto,
  UpdatePresentationReactionDto,
} from '../dtos';

export class PresentationReactionsServiceImpl
  implements PresentationReactionsService
{
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
    const reactions = await this.presentationReactionModel
      .find(where)
      .skip(skip)
      .limit(size)
      .populate('owner')
      .exec();

    const data = reactions.map((item) => item.toJSON());
    const items = await this.presentationReactionModel.countDocuments().exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const reaction = await this.presentationReactionModel
      .findById(id)
      .populate('owner')
      .exec();

    return reaction ? reaction.toJSON() : null;
  }

  async findOneBy(filter: QueryFilterDto<PresentationReaction>) {
    const reaction = await this.presentationReactionModel
      .findOne(filter)
      .populate('owner')
      .exec();

    return reaction ? reaction.toJSON() : null;
  }

  async update(id: string, data: UpdatePresentationReactionDto) {
    const reaction = await this.presentationReactionModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    return reaction ? reaction.toJSON() : null;
  }

  async remove(id: string) {
    const reaction = await this.presentationReactionModel
      .findOneAndDelete({ _id: id })
      .exec();

    return reaction ? reaction.toJSON() : null;
  }
}
