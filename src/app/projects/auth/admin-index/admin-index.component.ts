import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/services/auth.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
