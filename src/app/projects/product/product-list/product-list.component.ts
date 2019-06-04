import { Component, OnInit} from '@angular/core';
import { CabShowService } from '../../service/cab-show.service';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { Http } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  sortOptions: any;

  sortOrder: number;

  sortField: string;

  public cabinetList: Array<{ cab_desc: string, cab_name: string, price: string, id: number, pic: string }>;

  pic: any;

  constructor(private httpclient: HttpClient,
              private http: Http,
              private cabService: CabShowService,
              private shoppingCartService: ShoppingCartService,
              private route: Router) {
    this.getCabinets();
  }

  get serverUrl(): string {
    return CabShowService.server_url;
  }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Name', value: 'name'}
    ];
  }

  getCabinets(): any {
    this.cabService.getCabinets().subscribe((res) => {
      this.cabinetList = <Array<{ id: number, cab_desc: string, cab_name: string, price: string, pic: string }>>res.json();
    });
  }

  getPics(): any {
    this.cabService.getPics().subscribe((res) => {
      this.pic = res;
    });
  }

  addToCart(cabinet) {
    cabinet.cart_cnt = 1;
    this.shoppingCartService.addToCart(cabinet);
    this.route.navigateByUrl('/cart');
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
