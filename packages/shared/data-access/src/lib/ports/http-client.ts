import { Observable } from 'rxjs';

interface ResponseTypeMap<T = void> {
  arrayBuffer: ArrayBuffer;
  text: string;
  blob: Blob;
  json: T;
}

interface RequestConfig extends Omit<RequestInit, 'method'> {
  responseType: keyof ResponseTypeMap;
  params?: object;
}

export abstract class HttpClient {
  protected abstract request<R, D = object>(
    method: string,
    path: string,
    data?: D
  ): Observable<R>;

  abstract get<R>(path: string, config?: Partial<RequestConfig>): Observable<R>;

  abstract post<R, D = object>(
    path: string,
    data: D,
    options?: Partial<RequestConfig>
  ): Observable<R>;

  abstract put<R, D = object>(
    path: string,
    data: D,
    options?: Partial<RequestConfig>
  ): Observable<R>;

  abstract patch<R, D = object>(
    path: string,
    data: D,
    options?: Partial<RequestConfig>
  ): Observable<R>;

  abstract delete<R, D = object>(
    path: string,
    data?: D,
    options?: Partial<RequestConfig>
  ): Observable<R>;
}
