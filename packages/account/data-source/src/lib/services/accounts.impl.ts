import { FindFilterDto, FindParamsDto } from '@devmx/shared-data-source';
import { AccountsService } from '@devmx/account-domain/server';
import { Account } from '@devmx/shared-api-interfaces';
import { SignUpDto, UpdateAccountDto } from '../dtos';
import { Model } from 'mongoose';

export class AccountsServiceImpl implements AccountsService {
  constructor(private accountModel: Model<Account>) {}

  async create(data: SignUpDto): Promise<Account> {
    const createdAccount = new this.accountModel(data);
    return createdAccount.save();
  }

  async find(params: FindParamsDto<Account>) {
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
    const account = await this.accountModel.findById(id).exec();

    if (!account) {
      throw `Conta não encontrada`;
    }

    return account.toJSON();
  }

  async findOneBy(filter: FindFilterDto<Account>) {
    const account = await this.accountModel.findOne(filter).exec();

    return account ? account.toJSON() : null;
  }

  async update(id: string, data: Partial<UpdateAccountDto>) {
    const account = await this.accountModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    if (!account) {
      throw `Problema ao alterar conta`;
    }

    return account.toJSON();
  }

  async remove(id: string) {
    return this.accountModel.findOneAndDelete({ _id: id }).exec();
  }
}
