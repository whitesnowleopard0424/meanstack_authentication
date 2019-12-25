import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user :any= {};

  constructor(
    private registerSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(){
     this.registerSvc.register(this.user)
            .subscribe(
                data => {
                  localStorage.setItem('token', data.token);
                  this.router.navigate(['/profile']);
                },
                error => {
                    console.log(error);
            });
  }
}
