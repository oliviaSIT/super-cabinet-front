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
    this.getProducts();
  }

  getProducts(): any {
    this.proService.getProducts().subscribe((res) => {
      this.productList = <Array<{ id: number, pro_name: string, price: string, pic: string }>>res.json();
    });
  }


  addToCart(product) {
    product.cart_cnt = 1;
    this.shoppingCartService.addToCart(product);
    this.route.navigateByUrl('/cart');
  }

  getPro(id: any): any {
    this.proService.getPro(id).subscribe;
  }
}
