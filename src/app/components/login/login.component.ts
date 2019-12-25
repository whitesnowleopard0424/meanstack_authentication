import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private loginSvc: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
  }

  login(){
    this.loginSvc.login(this.user)
    .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/profile']);
        },
        error => {
            console.log('err: ',error);
        }
  );  
  }
}
