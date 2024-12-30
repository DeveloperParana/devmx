import { createUseCaseProvider, render } from '@devmx/shared-util-data/server';
import { Env, MailerService } from '@devmx/shared-api-interfaces/server';
import { NotFoundError, RequestError } from '@devmx/shared-util-errors';
import { UsersService } from '@devmx/account-domain/server';
import { AlbumsService, PhotosService } from '../services';
import {
  Photo,
  UseCase,
  EditablePhoto,
  UpdatePhotoTags,
} from '@devmx/shared-api-interfaces';

export class UpdatePhotoTagsUseCase implements UseCase<EditablePhoto, Photo> {
  constructor(
    private photosService: PhotosService,
    private albumsService: AlbumsService,
    private mailerService: MailerService,
    private usersService: UsersService,
    private env: Env
  ) {}

  async execute(data: UpdatePhotoTags) {
    const photo = await this.photosService.findOne(data.id);

    if (!photo) {
      throw new NotFoundError(`Photo ${data.id} não encontrada`);
    }

    const album = await this.albumsService.findOne(
      typeof data.album === 'object' ? data.album['id'] : data.album
    );

    if (!album) {
      throw new NotFoundError(`Album ${data.album} não encontrado`);
    }

    const tagUserIds = new Set(photo.tags?.map((tag) => tag.user.id) ?? []);

    const newTags = (data.tags ?? []).filter(
      (tag) => !tagUserIds.has(tag.user.id)
    );

    const updated = await this.photosService.update(data.id, data);

    if (!updated) {
      throw new RequestError(`Não foi possível alterar a foto`);
    }

    if (newTags.length > 0) {
      for (const tag of newTags) {
        const user = await this.usersService.findOne(tag.user.id);
        if (!user) {
          throw new NotFoundError(
            `Usuário ${tag.user.displayName} não encontrado`
          );
        }

        const { title } = album;
        const { name, contact } = user;

        const url = `${this.env.origin}/#/albuns/fotos/${data.id}`;

        const substitutions = { name, url, title };

        await this.mailerService.send({
          to: contact.email,
          from: 'portal@devparana.mx',
          html: render('user-tag.html', substitutions),
          subject: `Você foi marcado em uma foto da comunidade`,
        });
      }
    }

    return updated;
  }
}

export function provideUpdatePhotoTagsUseCase() {
  return createUseCaseProvider(UpdatePhotoTagsUseCase, [
    PhotosService,
    AlbumsService,
    MailerService,
    UsersService,
    Env,
  ]);
}
