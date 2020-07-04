import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ElectionsDetailService {
  public env =  environment;
  public apiUrl = this.env['apiUrl']
  constructor(private http:HttpClient) { }
  public _url;
  public data;

  public getUpComingElections(userId){
    this.data={
      "id":userId
    }
    console.log(this.data);
    this._url = `${this.apiUrl}/getAllUpcomingElections/`;
    var res = this.http.post(
      this._url,
      this.data
    );

    return res;
  }

  public getPastElections(userId){
    this.data={
      "id":userId
    }
    console.log(this.data);
    this._url = `${this.apiUrl}/getAllPastElections/`;
    var res = this.http.post(
      this._url,
      this.data
    );

    return res;
  }
}
