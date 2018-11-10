import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { CabShowService } from '../../../service/cab-show.service';
import { ShoppingCartService } from '../../../service/shopping-cart.service';

@Component({
  selector: 'app-cabinet-list-detail',
  templateUrl: './cabinet-list-detail.component.html',
  styleUrls: ['./cabinet-list-detail.component.css']
})
export class CabinetListDetailComponent implements OnInit {

  private id: any;

  public cabDet: any;

  constructor(private router: ActivatedRoute,
              private cabShowService: CabShowService,
              private shoppingCartService: ShoppingCartService,
              private route: Router) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => this.id = params.get('id'));

    this.cabShowService.getCab(this.id).subscribe((res) => {
      this.cabDet = res.json();
      console.log(this.cabDet);
      this.cabDet.cart_cnt = 1;
    });
  }

  get serverUrl(): string {
    return CabShowService.server_url;
  }

  addCart() {
    this.shoppingCartService.addToCart(this.cabDet);
    this.route.navigateByUrl('/cart');
  }
}
