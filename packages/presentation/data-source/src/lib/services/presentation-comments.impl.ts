import { PresentationCommentsService } from '@devmx/presentation-domain/server';
import { QueryByPresentationParams } from '@devmx/presentation-domain';
import { objectId, QueryFilterDto } from '@devmx/shared-data-source';
import { PresentationCommentCollection } from '../schemas';
import {
  PresentationComment,
  PresentationCommentOut,
} from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';
import {
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
} from '../dtos';

export class PresentationCommentsServiceImpl
  implements PresentationCommentsService
{
  constructor(
    private presentationCommentModel: Model<PresentationCommentCollection>
  ) {}

  async create(
    data: CreatePresentationCommentDto
  ): Promise<PresentationCommentOut> {
    const createdPresentationComment = new this.presentationCommentModel(data);
    return (await createdPresentationComment.save()).toJSON();
  }

  async find(params: QueryByPresentationParams<PresentationComment>) {
    const { page = 0, size = 10, filter } = params;

    const presentation = objectId(params.presentation);

    const skip = page * size;
    const where = { ...filter, presentation };
    const comments = await this.presentationCommentModel
      .find(where)
      .skip(skip)
      .limit(size)
      .populate('owner')
      .populate('presentation')
      .exec();

    const data = comments.map((item) => item.toJSON());
    const items = await this.presentationCommentModel.countDocuments().exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const comment = await this.presentationCommentModel
      .findById(id)
      .populate('owner')
      .populate('presentation')
      .exec();

    return comment ? comment.toJSON() : null;
  }

  async findOneBy(filter: QueryFilterDto<PresentationComment>) {
    const comment = await this.presentationCommentModel
      .findOne(filter)
      .populate('owner')
      .populate('presentation')
      .exec();

    return comment ? comment.toJSON() : null;
  }

  async update(id: string, data: UpdatePresentationCommentDto) {
    const comment = await this.presentationCommentModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    return comment ? comment.toJSON() : null;
  }

  async remove(id: string) {
    const comment = await this.presentationCommentModel
      .findOneAndDelete({ _id: id })
      .exec();

    return comment ? comment.toJSON() : null;
  }
}
