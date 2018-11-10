import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {OrderDetailService} from "../../service/order-detail.service";
@Component({
  selector: 'app-order-lookup',
  templateUrl: './order-lookup.component.html',
  styleUrls: ['./order-lookup.component.css']
})
export class OrderLookupComponent implements OnInit {

  constructor(private http: Http, private orderDetailService: OrderDetailService) {
    this.getOrders();
  }

  orders: any

  buyCabs: any

  ngOnInit() {
  }

  getOrders() {
    this.http.get('http://localhost:8080/order').subscribe((res) => {
      this.orders = res.json();
      console.log(this.orders);
    });
  }

  doDelete(orderId) {
    this.http.delete('http://localhost:8080/order/' + orderId).subscribe((res) => {
      console.log(res.json().success)
      if (res.json().success === true) {
        this.getOrders();
      }
    });
  }

  getItems(orderId) {
    this.orderDetailService.getItems(orderId);
  }
}
