import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}



  register(user:any):Observable<any>{
    // return this.http.post(`https://upskilling-egypt.com/api/v1/Users/Register`,user);
    return this.http.post(`Users/Register`, user);
   
  }

}

 