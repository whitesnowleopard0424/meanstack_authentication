import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  getProfile(){
    return this.http.post<any>('/auth/profile', {} ,httpOptions);
  }
}
