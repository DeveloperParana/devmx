import { QueryParamsDto, QueryFilterDto } from '../../shared/dtos';
import { CreateAccountDto, UpdateAccountDto } from '../dtos';
import { AccountsService } from './accounts.service';
import { Account } from '../schemas';
import { Model } from 'mongoose';

export class AccountsServiceImpl implements AccountsService {
  constructor(private accountModel: Model<Account>) {}

  async create(data: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(data);
    return createdAccount.save();
  }

  async find(params: QueryParamsDto<Account>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;
    const where = { ...filter };
    const accounts = await this.accountModel
      .find(where)
      .skip(skip)
      .limit(size)
      .exec();

    const data = accounts.map((item) => item.toJSON());
    const items = await this.accountModel.countDocuments().exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    return this.accountModel.findById(id).exec();
  }

  async findOneBy(filter: QueryFilterDto<Account>) {
    return this.accountModel.findOne(filter).exec();
  }

  async update(id: string, data: UpdateAccountDto) {
    return this.accountModel.findOneAndUpdate({ _id: id }, data).exec();
  }

  async remove(id: string) {
    return this.accountModel.findOneAndDelete({ _id: id }).exec();
  }
}
