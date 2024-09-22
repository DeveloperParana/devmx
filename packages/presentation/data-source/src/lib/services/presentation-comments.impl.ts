import { PresentationCommentsService } from '@devmx/account-domain/server';
import { QueryFilterDto, QueryParamsDto } from '@devmx/shared-data-source';
import { PresentationComment } from '@devmx/shared-api-interfaces';
import { Model } from 'mongoose';
import {
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
} from '../dtos';

export class PresentationCommentsServiceImpl implements PresentationCommentsService {
  constructor(private presentationCommentModel: Model<PresentationComment>) {}

  async create(
    data: CreatePresentationCommentDto
  ): Promise<PresentationComment> {
    const createdPresentationComment = new this.presentationCommentModel(data);
    return (await createdPresentationComment.save()).toJSON();
  }

  async find(params: QueryParamsDto<PresentationComment>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;
    const where = { ...filter };
    const comments = await this.presentationCommentModel
      .find(where)
      .skip(skip)
      .limit(size)
      .populate('account')
      .exec();

    const data = comments.map((item) => item.toJSON());
    const items = await this.presentationCommentModel.countDocuments().exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const comment = await this.presentationCommentModel
      .findById(id)
      .populate('account')
      .exec();

    if (!comment) {
      throw `Comentário não encontrado`;
    }

    return comment.toJSON();
  }

  async findOneBy(filter: QueryFilterDto<PresentationComment>) {
    const comment = await this.presentationCommentModel
      .findOne(filter)
      .populate('account')
      .exec();

    if (!comment) {
      throw `Comentário não encontrado`;
    }

    return comment.toJSON();
  }

  async update(id: string, data: UpdatePresentationCommentDto) {
    const comment = await this.presentationCommentModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    if (!comment) {
      throw `Erro ao alterar comentário`;
    }

    return comment.toJSON();
  }

  async remove(id: string) {
    const comment = await this.presentationCommentModel
      .findOneAndDelete({ _id: id })
      .exec();

    if (!comment) {
      throw `Erro ao remover comentário`;
    }

    return comment.toJSON();
  }
}
