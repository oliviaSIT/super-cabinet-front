import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../modules/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

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
          this.router.navigate(['/product']);
        }
      });
  }

  login(user) {
    this.authService.login(user)
      .subscribe((res) => {
        this.response = res;
        if (res.success) {
          this.router.navigate(['/product']);
        }
        // else {
        //   this.router.navigate(['./login-error.component.html'])
        // }
      });
  }

  // getUsers() {
  //   this.authService.getUsers()
  //     .subscribe(res => {
  //       console.log(res);
  //       this.response = res;
  //     });
  // }

}
