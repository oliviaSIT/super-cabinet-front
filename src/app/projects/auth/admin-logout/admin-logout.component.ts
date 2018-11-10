import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../modules/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

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
          this.router.navigate(['/admin']);
        }
      });
  }
}
