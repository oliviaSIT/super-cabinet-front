import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http, Headers} from '@angular/http';
import { ShoppingCartService } from '../../service/shopping-cart.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  form: FormGroup;

  public cabinets: Array<any>

  products: Array<any>

  totalPrice: any

  canPayOrder: boolean

  list = []
  constructor(private http: Http, private fb: FormBuilder, private shoppingCartService: ShoppingCartService, private router: Router) {
    this.canPayOrder = true
    this.createForm()
    this.cabinets = this.shoppingCartService.getAllCabs();
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

  makeOrder() {
    let form = document.getElementsByTagName("form")[0];
    // console.log(form);
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if (status === 200) {
        console.log("yes")
        let token = response.id;
        this.chargeCard(token);
        this.generateOrder()
      } else {
        // this.generateOrder()
        alert(response.error.message);
      }
    });
  }

  chargeCard(token: string) {
    const headers = new Headers({'token': token, 'amount': this.totalPrice});
    this.http.post('http://localhost:8080/payment/charge', {}, {headers: headers})
      .subscribe(resp => {
        console.log(resp);
      });
  }

  generateOrder() {
    let order = this.form.value
    order.address = this.form.value.address + " " + this.form.value.apt + " " + this.form.value.city + " " + this.form.value.state;
    order.first_name = this.form.value.firstname
    order.last_name = this.form.value.lastname
    order.zip = this.form.value.zip
    order.phone = this.form.value.phone
    order.ord_price = this.shoppingCartService.getTotalPrice()
    order.orderNum = ""

    this.products = this.shoppingCartService.getAllCabs()

    this.products.forEach( (value) => {
      this.list.push({"cab_id": value.id, "cnt": value.cart_cnt})
    })
    order.cab = this.list
    console.log(order)
    this.http.post('http://localhost:8080' + "/order", order).subscribe((res) => {
      console.log(res.json());
    })
    this.shoppingCartService.clearCart()
    this.router.navigateByUrl("/order/placed")
  }
}
