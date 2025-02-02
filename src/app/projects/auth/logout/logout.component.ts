import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../modules/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(res => {
        if(res.success){
          this.router.navigate(['/']);
        }
      });
  }
}
