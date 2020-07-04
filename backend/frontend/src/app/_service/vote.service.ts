import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  public env =  environment;
  public apiUrl = this.env['apiUrl']
  constructor(private http:HttpClient) { }
  public _url;
  public data;

  public getPartyCandidates(userId,electionId){
   console.log("hello")
    this.data ={
      "user_id":userId,
      "election_id":electionId
    }
    this._url = `${this.apiUrl}/getAllContestingCandidatesOfUserConstituency/`
    var res = this.http.post(
      this._url,
      this.data
    );
    
    return res;
  }

}
