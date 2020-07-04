import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AadharService {
  public env =  environment;
  public apiUrl = this.env['apiUrl']
  constructor(private http:HttpClient) { }
  public _url;
  public data;

  public getAadharDetails(userId){
    this.data={
      "id":userId
    }
    console.log(this.data);
    this._url = `${this.apiUrl}/getAadharDetails/`;
    var res = this.http.post(
      this._url,
      this.data
    );

    console.log(res);
    return res;
  }
}
