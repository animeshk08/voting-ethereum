import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public env =  environment;
  public apiUrl = this.env['apiUrl']
  constructor(private http:HttpClient) { }
  public _url;
  public data;
  public getAuthenticated(mobNo){
    console.log(mobNo);
    mobNo = mobNo.toString();
    this.data ={
      "mobile_num":mobNo
    }
    this._url = `${this.apiUrl}/auth/`
    var res = this.http.post(
      this._url,
      this.data
    );
    
    return res;
  }
}
