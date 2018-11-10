import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import {AppConfig} from '../modules/services/app.config';

@Injectable()
export class CabShowService {

  private API_URL = AppConfig.API_URL;

  public static server_url = AppConfig.API_URL + '/files/';

  pic: any

  constructor(private httpclient: HttpClient, private http: Http) { }

  getCabinets(): any {
   return this.http.get(this.API_URL + '/cabinets');
  }

  getPics(): any {
    return this.httpclient.get(this.API_URL + '/getallfiles');
  }

  getCab(id: any): any {
    return this.http.get(this.API_URL + '/cabinets/' + id);
  }
}
