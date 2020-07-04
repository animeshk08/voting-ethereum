import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class W3Service {
  public env =  environment;
  public apiUrl = this.env['apiUrlW3']
  constructor(private http:HttpClient) { }
  public _url;
  public data;

  public addVoter(userKey){
   console.log(userKey)
    this.data ={
      "voterHash":userKey,
    }
    this._url = `${this.apiUrl}/addVoter/`;
    var res = this.http.post(
      this._url,
      this.data
    );
    
    return res;
  }

  public vote(voterKey,candidateKey){
    this.data={
      "voterHash":voterKey,
      "candidateHash":candidateKey
    }

    this._url = `${this.apiUrl}/vote/`;
    var res = this.http.post(
      this._url,
      this.data
    );
    
    return res;
  }

  public getVoteCount(userId,electionId){
    this.data={
      "user_id":userId,
      "election_id":electionId
    }
    console.log(this.data);

    this._url = `${this.apiUrl}/getVoteCount/`;
    console.log(this._url);
    
    var res = this.http.post(
      this._url,
      this.data
    );
    
    return res;
  }

}