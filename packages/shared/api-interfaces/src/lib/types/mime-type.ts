export type ImageMimeType =
  | `image/avif`
  | `image/bmp`
  | `image/gif`
  | `image/jpeg`
  | `image/svg+xml`
  | `image/png`
  | `image/apng`
  | `image/webp`;

export type TextMimeType = `text/csv` | `text/calendar` | `text/plain`;

export type VideoMimeType =
  | `video/x-msvideo`
  | `video/mp4`
  | `video/mp2t`
  | `video/webm`;

export type AudioMimeType =
  | `audio/midi`
  | `audio/x-midi`
  | `audio/mpeg`
  | `audio/ogg`
  | `audio/wav`
  | `audio/webm`;

export type ApplicationMimeType =
  | `application/pdf`
  | `application/vnd.ms-powerpoint`
  | `application/vnd.ms-excel`
  | `application/zip`;

export type MimeType =
  | ImageMimeType
  | TextMimeType
  | VideoMimeType
  | AudioMimeType
  | ApplicationMimeType;
