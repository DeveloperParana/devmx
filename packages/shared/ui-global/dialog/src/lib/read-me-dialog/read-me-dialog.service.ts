import { HttpClient } from '@angular/common/http';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReadMeDialogService {
  constructor(private http: HttpClient) {}

  loadReadMe(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }
}
