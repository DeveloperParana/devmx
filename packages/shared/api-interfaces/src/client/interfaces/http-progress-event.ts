export enum HttpEventType {
  Sent = 0,
  UploadProgress = 1,
  ResponseHeader = 2,
  DownloadProgress = 3,
  Response = 4,
  User = 5,
}

export interface HttpProgressEvent {
  type:
    | HttpEventType.Response
    | HttpEventType.UploadProgress
    | HttpEventType.DownloadProgress;
  loaded: number;
  total?: number;
}
