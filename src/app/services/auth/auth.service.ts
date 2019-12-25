import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  login(user : any){
    return this.http.post<any>('/auth/login', user, httpOptions);
  }

  loggedIn(){
    return !!localStorage.getItem('token');  
  }

  register(user : User){
    return this.http.post<any>('/auth/register', user, httpOptions);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken(){
    console.log("intercepting the request")
    return   localStorage.getItem('token');
  }
}
