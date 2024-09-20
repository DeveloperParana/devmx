import { AccountsService } from './accounts.service';
import { Account } from '../schemas';
import { Model } from 'mongoose';
import {
  QueryParamsDto,
  CreateAccountDto,
  UpdateAccountDto,
  QueryFilterDto,
} from '../dtos';

export class AccountsServiceImpl implements AccountsService {
  constructor(private accountModel: Model<Account>) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  async find({ page = 0, size = 10, filter }: QueryParamsDto<Account>) {
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

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountModel.findOneAndUpdate({ id }, updateAccountDto).exec();
  }

  async remove(id: string) {
    return this.accountModel.findOneAndDelete({ id }).exec();
  }
}
