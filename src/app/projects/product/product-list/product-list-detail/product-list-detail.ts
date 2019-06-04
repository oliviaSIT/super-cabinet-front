import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { ProShowService } from '../../../service/pro-show.service';
import { ShoppingCartService } from '../../../service/shopping-cart.service';

@Component({
  selector: 'app-product-list-detail',
  templateUrl: './product-list-detail.component.html',
  styleUrls: ['./product-list-detail.component.css']
})
export class ProductListDetail implements OnInit {

  private id: any;

  public proDet: any;

  constructor(private router: ActivatedRoute,
              private proShowService: ProShowService,
              private shoppingCartService: ShoppingCartService,
              private route: Router) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => this.id = params.get('id'));

    this.proShowService.getPro(this.id).subscribe((res) => {
      this.proDet = res.json();
      this.proDet.cart_cnt = 1;
    });
  }

  get serverUrl(): string {
    return ProShowService.server_url;
  }

  addCart() {
    this.shoppingCartService.addToCart(this.proDet);
    this.route.navigateByUrl('/cart');
  }
}
