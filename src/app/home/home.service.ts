import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _httpClient: HttpClient) {}
  sendLeadMail(leadInfo: any) {
    return this._httpClient.post(
      `http://api.dev.degpeg.com/users/send-lead-data`,
      leadInfo
    );
  }
}
