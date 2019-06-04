import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../modules/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  flag: boolean

  passwordNotmatch: boolean

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.flag = false;
    this.passwordNotmatch = false;
  }

  register(user) {
    if (user.password === user.password2) {
      this.passwordNotmatch = false;
      this.authService.register(user)
        .subscribe((res) => {
          if (res.success) {
            // this.router.navigate(['/']);
            this.flag = true;
          }
        });
    } else {
      this.flag = false;
      this.passwordNotmatch = true;
    }
  }
}
