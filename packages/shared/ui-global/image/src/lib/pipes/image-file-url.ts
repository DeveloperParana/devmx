import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFileUrl',
  standalone: true,
})
export class ImageFileURLPipe implements PipeTransform {
  transform(file: File) {
    return URL.createObjectURL(file);
  }
}
