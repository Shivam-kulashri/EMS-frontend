import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupApi='http://localhost:8081/auth/sign-up';
  private loginApi = 'http://localhost:8081/api/token';
  private userDetailsApi = 'http://localhost:8081/auth/user';

  constructor(private httpclient: HttpClient){}
    
  signup(user: any): Observable<any> {
      return this.httpclient.post(this.signupApi,user);
    }
  
  login(user: any): Observable<any> {
      return this.httpclient.post(this.loginApi, user);
  }
  getUserDetails(token: any): Observable<any>{
       
      const httpOptions = {
          headers: new HttpHeaders({
             Authorization: 'Bearer '+ token
          })
        };
      return this.httpclient.get(this.userDetailsApi,httpOptions); 
  }
}
