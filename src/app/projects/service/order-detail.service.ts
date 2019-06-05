import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AppConfig} from '../modules/services/app.config';

@Injectable()
export class OrderDetailService {

  private API_URL = AppConfig.API_URL;

  buyPros: any;

  constructor(private http: Http) {
  }

  getItems(orderId) {
    this.http.get(this.API_URL + '/buypros/' + orderId).subscribe((res) => {
      this.buyPros = res.json()
      console.log(this.buyPros);
    });
  }

  showItems(): any {
    return this.buyPros;
  }
}
