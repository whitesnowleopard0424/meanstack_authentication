import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userSvc: UserService,
    private router: Router
  ) { }
  profile = {
    username:String,
    age:String,
    job:String
  };
  ngOnInit() {
    this.userSvc.getProfile().subscribe(
      res => { this.profile = res;},
      err =>{ this.router.navigate(['/login']); }
  );
  }

}
