import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cabinets: Array<any>

  totalPrice: number

  constructor(private shoppingCartService: ShoppingCartService) {
    this.cabinets =  shoppingCartService.getAllCabs()
    this.totalPrice = shoppingCartService.getTotalPrice()
  }

  ngOnInit() {
  }

  triggerCart(num, i) {
    if(num <= 0) {
      this.cabinets[i].cart_cnt = 1;
    }
    this.totalPrice = this.shoppingCartService.getTotalPrice()
  }

  get serverUrl(): string {
    return ShoppingCartService.server_url;
  }

  removeCab(index) {
    this.shoppingCartService.removeCab(index);
    this.totalPrice = this.shoppingCartService.getTotalPrice()
  }
}
