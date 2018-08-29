import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/appsettings';

@Injectable()
export class ServerRequest {

  constructor(private _httpClient: HttpClient, private _appSettings: AppSettings) {

  }

  get(url: string, parameters?: any) {
    console.log(`${this._appSettings.serverUrl}${url}`);
    return this._httpClient.get(`${this._appSettings.serverUrl}${url}`, parameters);
  }

  post(url: string, payload?: any, parameters?: any) {
    return this._httpClient.post(url, payload, parameters);
  }

  delete(url: string, parameters?: any) {
    return this._httpClient.delete(url, parameters);
  }
}
