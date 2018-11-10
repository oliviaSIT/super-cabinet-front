import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {OrderDetailService} from "../../../service/order-detail.service";

@Component({
  selector: 'app-order-lookup-detail',
  templateUrl: './order-lookup-detail.component.html',
  styleUrls: ['./order-lookup-detail.component.css']
})
export class OrderLookupDetailComponent implements OnInit {

  buycabs: any;

  constructor(private orderDetailService: OrderDetailService) {
  }

  ngOnInit() {
    this.showItems();
  }

  showItems() {
    this.buycabs = this.orderDetailService.showItems();
    console.log(this.buycabs);
    this.buycabs.forEach(obj => {
      obj.cab_id
    })
  }
}
