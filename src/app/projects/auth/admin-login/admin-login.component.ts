import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../modules/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  response;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.checklogin()
      .subscribe((res) => {
        this.response = res;
        console.log(res);
        if (res.success) {
          this.router.navigate(['/admin-index']);
        }
      });
  }

  login(user) {
    this.authService.login(user)
      .subscribe((res) => {
        this.response = res;
        if (res.success) {
          this.router.navigate(['/admin-index']);
        } else {
          this.router.navigate(['./login-error.component.html']);
        }
      });
  }
}
