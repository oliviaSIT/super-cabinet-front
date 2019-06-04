import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Headers} from '@angular/http';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  form: FormGroup;

  public products: Array<any>;

  productsInCart: Array<any>;

  totalPrice: any;

  canPayOrder: boolean;

  list = [];
  constructor(private http: Http, private fb: FormBuilder, private shoppingCartService: ShoppingCartService, private router: Router) {
    this.canPayOrder = true;
    this.createForm();
    this.products = this.shoppingCartService.getAllPros();
    this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  ngOnInit() {
    if (this.totalPrice === 0) {
      this.canPayOrder = false;
    }
  }

  createForm() {
    this.form = this.fb.group({
      email: [''],
      firstname: ['', Validators.required],
      lastname: [''],
      address: [''],
      apt: [''],
      city: [''],
      state: [''],
      zip: [''],
      phone: ['']
    });
  }

  generateOrder() {
    let order = this.form.value;
    order.address = this.form.value.address + ' ' + this.form.value.apt + ' ' + this.form.value.city + ' ' + this.form.value.state;
    order.first_name = this.form.value.firstname;
    order.last_name = this.form.value.lastname;
    order.zip = this.form.value.zip;
    order.phone = this.form.value.phone;
    order.ord_price = this.shoppingCartService.getTotalPrice();
    order.orderNum = '';

    this.productsInCart = this.shoppingCartService.getAllPros();

    this.productsInCart.forEach( (value) => {
      this.list.push({'pro_id': value.id, 'cnt': value.cart_cnt});
    });
    order.pro = this.list;
    console.log(order);
    this.http.post('http://localhost:8080' + '/order', order).subscribe((res) => {
      console.log(res.json());
    });
    this.shoppingCartService.clearCart();
    this.router.navigateByUrl('/order/placed');
  }
}
