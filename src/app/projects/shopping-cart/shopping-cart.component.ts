import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Array<any>;

  totalPrice: number;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.products =  shoppingCartService.getAllPros();
    this.totalPrice = shoppingCartService.getTotalPrice();
  }

  ngOnInit() {
  }

  triggerCart(num, i) {
    if(num <= 0) {
      this.products[i].cart_cnt = 1;
    }
    this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  get serverUrl(): string {
    return ShoppingCartService.server_url;
  }

  removePro(index) {
    this.shoppingCartService.removePro(index);
    this.totalPrice = this.shoppingCartService.getTotalPrice();
  }
}
