import { Injectable } from '@angular/core';
import {AppConfig} from '../modules/services/app.config';

@Injectable()
export class ShoppingCartService {
  public static server_url = AppConfig.API_URL + '/files/';

  public cart: Array<any>;
  public shoppingCart: any;
  public total_price: number;

  constructor() {
    this.cart = new Array<any>();
    this.loadCart();
    this.total_price = 0;
  }

  addToCart(product: any) {
    let pro = product;
    pro.pro_cnt = 1;
    if (localStorage.getItem('cart') == null) { // localStorage is null
      let cart: any = [];
      cart.push(JSON.stringify(product));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {        // localStorage is not null
      let cart: any = JSON.parse(localStorage.getItem('cart'));
      let index: number = -1;
      for (let i = 0; i < cart.length; i++) {  // find which product will add to the cart
        let item = JSON.parse(cart[i]);
        if (item.id === product.id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        cart.push(JSON.stringify(product));
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      else {
        let item = JSON.parse(cart[index]);
        item.pro_cnt += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    this.loadCart();

  }

  updateCart(product: any, quantity) {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (let i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      if (item.id === product.id) {
        index = i;
        break;
      }
    }
    let item = JSON.parse(cart[index]);
    // if (flag) { // use flag to check the input is directly input by user or not
    //   item.pro_cnt = quantity;
    // } else {  // use flag to check the input is through by clicking button
    //   if (quantity === 1) {
    //     item.pro_cnt += quantity;
    //   } else {
    //     if (item.pro_cnt > 1) {
    //       item.pro_cnt += quantity;
    //     }
    //   }
    // }
    item.pro_cnt = quantity;
    cart[index] = JSON.stringify(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }

  getAllPros() {
    return this.shoppingCart;
  }

  getTotalPrice() {
    let price: number = 0;
    this.shoppingCart.forEach((obj) => {
      price += obj.pro_cnt * obj.price;
    });
    this.total_price = price;
    return this.total_price;
  }

  // removePro(index) {
  //   this.total_price -= this.cart[index].price * this.cart[index].cart_cnt;
  //   this.cart.splice(index, 1);
  // }

  removeFromCart(name) {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    for(let i =0; i<cart.length; i++) {
      let item = JSON.parse(cart[i]);
      if (item.pro_name === name) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }
  clearCart() {
    localStorage.removeItem('cart');
    this.loadCart();
  }


  loadCart(): void {
    this.shoppingCart = [];
    if (localStorage.getItem('cart') == null) {
      return;
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.shoppingCart.push({
        id: item.id,
        pro_name: item.pro_name,
        price: item.price,
        pic: item.pic,
        pro_cnt: item.pro_cnt
      });
    }
  }

}
