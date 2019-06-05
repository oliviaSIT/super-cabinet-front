import { Component, OnInit } from '@angular/core';
import {OrderDetailService} from '../../../service/order-detail.service';

@Component({
  selector: 'app-order-lookup-detail',
  templateUrl: './order-lookup-detail.component.html',
  styleUrls: ['./order-lookup-detail.component.css']
})
export class OrderLookupDetailComponent implements OnInit {

  buypros: any;

  constructor(private orderDetailService: OrderDetailService) {
  }

  ngOnInit() {
    this.showItems();
  }

  showItems() {
    this.buypros = this.orderDetailService.showItems();
    console.log(this.buypros);
    this.buypros.forEach(obj => {
      obj.pro_id;
    });
  }
}
