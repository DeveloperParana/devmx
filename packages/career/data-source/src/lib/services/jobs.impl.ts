import { objectId, QueryFilterDto, QueryParamsDto } from '@devmx/shared-data-source';
import { JobsService } from '@devmx/career-domain/server';
import { CreateJobDto, UpdateJobDto } from '../dtos';
import { Job } from '@devmx/shared-api-interfaces';
import { JobCollection } from '../schemas';
import { Model } from 'mongoose';

export class JobsServiceImpl implements JobsService {
  constructor(private jobModel: Model<JobCollection>) {}

  async create(data: CreateJobDto): Promise<Job> {
    const createdJob = new this.jobModel(data);
    return (await createdJob.save()).toJSON();
  }

  async find(params: QueryParamsDto<Job>) {
    const { page = 0, size = 10, filter } = params;

    const skip = page * size;

    const where = { ...filter };

    const jobs = await this.jobModel
      .find(where)
      .skip(skip)
      .limit(size)
      .populate('owner', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    const data = jobs.map((item) => item.toJSON());
    const items = await this.jobModel.countDocuments(where).exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOne(id: string) {
    const job = await this.jobModel
      .findById(id)
      .populate('owner', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    return job ? job.toJSON() : null;
  }

  async findByOwner(ownerId: string, params: QueryParamsDto<Job>) {
    const { page = 0, size = 10, filter } = params;
    const skip = page * size;

    const owner = objectId(ownerId);

    const jobs = await this.jobModel
      .find({ ...filter, owner })
      .skip(skip)
      .limit(size)
      .populate('owner', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    const data = jobs.map((item) => item.toJSON());
    const items = await this.jobModel
      .countDocuments({ ...filter, owner })
      .exec();
    const pages = Math.ceil(items / size);

    return { data, items, pages };
  }

  async findOneBy(filter: QueryFilterDto<Job>) {
    const job = await this.jobModel
      .findOne(filter)
      .populate('owner', 'name username photo')
      .populate('city', 'name location timeZone')
      .exec();

    return job ? job.toJSON() : null;
  }

  async update(id: string, data: UpdateJobDto) {
    const job = await this.jobModel
      .findOneAndUpdate({ _id: id }, data)
      .exec();

    return job ? job.toJSON() : null;
  }

  async remove(id: string) {
    const job = await this.jobModel
      .findOneAndDelete({ _id: id })
      .exec();

    return job ? job.toJSON() : null;
  }
}
