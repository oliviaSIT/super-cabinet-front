import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {ProShowService} from '../service/pro-show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList: Array<{ pro_name: string, price: string, id: number, pic: string }>;

  pic: any;

  constructor(private httpclient: HttpClient,
              private http: Http,
              private proService: ProShowService) {
    this.getProducts();
  }

  get serverUrl(): string {
    return ProShowService.server_url;
  }

  ngOnInit() {
    this.getProducts();
    this.getPics();
  }

  getProducts(): any {
    this.proService.getProducts().subscribe((res) => {
      this.productList = <Array<{ id: number, pro_name: string, price: string, pic: string }>>res.json();
    });
  }

  getPics(): any {
    this.proService.getPics().subscribe((res) => {
      this.pic = res;
    });
  }

  getPro(id: any): any {
    this.proService.getPro(id).subscribe;
  }
}
