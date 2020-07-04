declare var require: any

import { Component, OnInit } from '@angular/core';
import { W3Service } from '../_service/w3.service';
import { environment } from '../../environments/environment'
import { NgxUiLoaderService } from 'ngx-ui-loader';

const _ = require('underscore');
const Candidates = require('../../assets/images.json');
const c = Candidates.projects;
const candidates = Candidates.categories;



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})



export class ResultsComponent implements OnInit {
  categories = candidates;
  public electionId;
  public userId;
  public resultData;
  public env = environment;
  public domain = this.env['apiUrl'];
  public count=1;
  public superscript;
  constructor(public w3Service:W3Service,private ngxLoader: NgxUiLoaderService) { }

  public getVoteCount(){
    this.ngxLoader.start();
    console.log("here ")
    this.w3Service.getVoteCount(this.userId,this.electionId).subscribe(
      res=>{
        console.log("res")
        console.log(res);
        this.resultData = res;
        this.resultData = _.sortBy(this.resultData, 'vote_count').reverse();
        console.log(this.resultData);
        this.ngxLoader.stop();
      }
    )
  }
  
  public mySuperscript(){
   
    if(this.count==1){
      this.superscript="st";
    }
    else if(this.count==2){
      this.superscript="nd";
    }
    else if(this.count==3){
      this.superscript="rd";
    }
    else{
      this.superscript="th";
    }
    this.count++;
  }

  ngOnInit() {
    console.log(this.categories);
    this.electionId = localStorage.getItem("electionId");
    this.userId = localStorage.getItem("userId");
    this.getVoteCount();
    this.count=1;
    this.superscript=["st","nd","rd","th","th","th"]
  }

}
