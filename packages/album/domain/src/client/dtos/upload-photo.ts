export interface UploadPhoto {
  album: string;

  caption?: string

  width: number

  height: number

  photo: File;
}
