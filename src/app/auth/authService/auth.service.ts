import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../moduleAut/register';
import { Login } from '../moduleAut/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}



  register(user:Register):Observable<any>{
    // return this.http.post(`https://upskilling-egypt.com/api/v1/Users/Register`,user);
    return this.http.post(`Users/Register`, user);
   
  }
  // upskilling-egypt.com:443/api/v1/Users/Login

logIn(userd:Login):Observable<any>{
  // https://upskilling-egypt.com/docs/#/Users/post_api_v1_Users_Login
  // return this.http.post(`Users/Login`,user);
  // return this.http.post(`https://upskilling-egypt.com/api/v1/Users/Login`,user)
  // return this.http.post(`upskilling-egypt.com:443/api/v1/Users/Login`,user)
  return this.http.post(`Users/Login`, userd );
}
// /api/v1/Users/Login

}


 