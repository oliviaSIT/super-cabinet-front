import { Component, OnInit} from '@angular/core';
import { ProShowService } from '../../service/pro-show.service';
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
  sortOrder: number;

  sortField: string;

  public productList: Array<{ pro_name: string, price: string, id: number, pic: string }>;

  pic: any;

  constructor(private httpclient: HttpClient,
              private http: Http,
              private proService: ProShowService,
              private shoppingCartService: ShoppingCartService,
              private route: Router) {
    this.getProducts();
  }

  get serverUrl(): string {
    return ProShowService.server_url;
  }

  ngOnInit() {
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

  addToCart(product) {
    product.cart_cnt = 1;
    this.shoppingCartService.addToCart(product);
    this.route.navigateByUrl('/cart');
  }
}
