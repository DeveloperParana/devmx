import { createUseCaseProvider, render } from '@devmx/shared-util-data/server';
import { MailerService } from '@devmx/shared-api-interfaces/server';
import { UsersService } from '@devmx/account-domain/server';
import { AlbumsService, PhotosService } from '../services';
import { NotFoundError } from '@devmx/shared-util-errors';
import { createMail } from '@devmx/shared-util-data';
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
    private usersService: UsersService
  ) {}

  async execute(data: UpdatePhotoTags) {
    const photo = await this.photosService.findOne(data.id);

    if (!photo) {
      throw new NotFoundError(`Photo ${data.id} não encontrada`);
    }

    const album = await this.albumsService.findOne(data.album);

    if (!album) {
      throw new NotFoundError(`Album ${data.album} não encontrado`);
    }

    const tagUserIds = new Set(photo.tags?.map((tag) => tag.user.id) ?? []);

    const newTags = (data.tags ?? []).filter(
      (tag) => !tagUserIds.has(tag.user.id)
    );

    if (newTags.length > 0) {
      for (const tag of newTags) {
        const user = await this.usersService.findOne(tag.user.id);
        if (!user) {
          throw new NotFoundError(
            `Usuário ${tag.user.displayName} não encontrado`
          );
        }

        const title = album.title;
        const displayName = user.displayName;
        const url = `https://devparana.mx/#/albuns/${data.album}`;

        const mail = createMail(
          user.contact.email,
          render('user-tag.html', { displayName, url, title }),
          `Você foi marcado em uma foto da comunidade`,
          'portal@devparana.mx'
        );

        await this.mailerService.send(mail);
      }
    }

    return this.photosService.update(data.id, data);
  }
}

export function provideUpdatePhotoTagsUseCase() {
  return createUseCaseProvider(UpdatePhotoTagsUseCase, [
    PhotosService,
    AlbumsService,
    MailerService,
    UsersService,
  ]);
}
