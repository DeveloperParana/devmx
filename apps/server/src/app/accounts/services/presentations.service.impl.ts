import { QueryFilterDto, QueryParamsDto } from '../../shared/dtos';
import { PresentationsService } from './presentations.service';
import { Model } from 'mongoose';
import {
  Presentation,
  PresentationComment,
  PresentationReaction,
} from '../schemas';
import {
  CreatePresentationDto,
  UpdatePresentationDto,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
  CreatePresentationReactionDto,
  UpdatePresentationReactionDto,
} from '../dtos';

export class PresentationsServiceImpl implements PresentationsService {
  constructor(
    private presentationModel: Model<Presentation>,
    private presentationCommentModel: Model<PresentationComment>,
    private presentationReactionModel: Model<PresentationReaction>
  ) {}

  async create(data: CreatePresentationDto): Promise<Presentation> {
    const createdPresentation = new this.presentationModel(data);
    return (await createdPresentation.save()).toJSON();
  }

  async createComment(
    data: CreatePresentationCommentDto
  ): Promise<PresentationComment> {
    const createdPresentationComment = new this.presentationCommentModel(data);
    return (await createdPresentationComment.save()).toJSON();
  }

  async createReaction(
    data: CreatePresentationReactionDto
  ): Promise<PresentationReaction> {
    const createdPresentationReaction = new this.presentationReactionModel(
      data
    );
    return (await createdPresentationReaction.save()).toJSON();
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

  async findComments(params: QueryParamsDto<PresentationComment>) {
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

  async findReactions(filter: QueryFilterDto<PresentationReaction>) {
    const where = { ...filter };
    const reactions = await this.presentationReactionModel
      .find(where)
      .populate('account')
      .exec();

    return reactions.map((item) => item.toJSON());
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

  async findOneComment(id: string) {
    const comment = await this.presentationCommentModel
      .findById(id)
      .populate('account')
      .exec();

    if (!comment) {
      throw `Comentário não encontrado`;
    }

    return comment.toJSON();
  }

  async findOneReaction(id: string) {
    const reaction = await this.presentationReactionModel
      .findById(id)
      .populate('account')
      .exec();

    if (!reaction) {
      throw `Reação não encontrada`;
    }

    return reaction.toJSON();
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

  async findOneCommentBy(filter: QueryFilterDto<PresentationComment>) {
    const comment = await this.presentationCommentModel
      .findOne(filter)
      .populate('account')
      .exec();

    if (!comment) {
      throw `Comentário não encontrado`;
    }

    return comment.toJSON();
  }

  async findOneReactionBy(filter: QueryFilterDto<PresentationReaction>) {
    const reaction = await this.presentationReactionModel
      .findOne(filter)
      .populate('account')
      .exec();

    if (!reaction) {
      throw `Reação não encontrada`;
    }

    return reaction.toJSON();
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

  async updateComment(id: string, data: UpdatePresentationCommentDto) {
    const comment = await this.presentationCommentModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    if (!comment) {
      throw `Erro ao alterar comentário`;
    }

    return comment.toJSON();
  }

  async updateReaction(id: string, data: UpdatePresentationReactionDto) {
    const reaction = await this.presentationReactionModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    if (!reaction) {
      throw `Erro ao alterar reação`;
    }

    return reaction.toJSON();
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

  async removeComment(id: string) {
    const comment = await this.presentationCommentModel
      .findOneAndDelete({ _id: id })
      .exec();

    if (!comment) {
      throw `Erro ao remover comentário`;
    }

    return comment.toJSON();
  }

  async removeReaction(id: string) {
    const reaction = await this.presentationReactionModel
      .findOneAndDelete({ _id: id })
      .exec();

    if (!reaction) {
      throw `Erro ao remover reação`;
    }

    return reaction.toJSON();
  }
}
