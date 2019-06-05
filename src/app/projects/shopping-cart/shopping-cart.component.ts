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

  get serverUrl(): string {
    return ShoppingCartService.server_url;
  }

  removePro(name) {
    this.shoppingCartService.removeFromCart(name);
    this.products = this.shoppingCartService.getAllPros();
    this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  quantityValidator(product, num) {
    if (num <= 0) {
      this.shoppingCartService.updateCart(product, 1);
    } else {
      this.shoppingCartService.updateCart(product, num);
    }

    this.products = this.shoppingCartService.getAllPros();
    this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  updateCart(num, i) {
    if(num <= 0) {
      this.products[i].pro_cnt = 1;
    }
    this.products = this.shoppingCartService.getAllPros();
    this.totalPrice = this.shoppingCartService.getTotalPrice();
  }
}
