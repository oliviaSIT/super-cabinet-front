import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AppConfig} from '../modules/services/app.config';

@Injectable()
export class OrderDetailService {

  private API_URL = AppConfig.API_URL;

  buyCabs: any;

  constructor(private http: Http) {
  }

  getItems(orderId) {
    this.http.get(this.API_URL + '/buycabs/' + orderId).subscribe((res) => {
      this.buyCabs = res.json()
      console.log(this.buyCabs);
    });
  }

  showItems(): any {
    return this.buyCabs;
  }
}
