

import { Component, OnInit,Input } from '@angular/core';
import { VoteService } from '../_service/vote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { W3Service } from '../_service/w3.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as Noty from 'noty';



@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  public categories;
  public userKey;
  public electionId;
  public env = environment;
  public domain = this.env['apiUrl'];
  public candidateKey;
  public voterKey;
  public userId;
  @Input() decisionHelper = false;
  constructor(public voteService:VoteService,public router:Router,public w3Service:W3Service,private ngxLoader: NgxUiLoaderService) { }

  public getPartyCandidates(){
    this.ngxLoader.start();
    this.voteService.getPartyCandidates(this.userId,this.electionId).subscribe(
      res=>{
        console.log(res);
        this.categories=res;
        this.ngxLoader.stop();
      }
    )
  }

  public vote(candidate){
    console.log("vote")
    this.candidateKey = candidate.aadhar_num;
    this.voterKey = this.userKey;
    // let added = addVoter(this.voterId);
    // console.log(added);
    this.ngxLoader.start();
    this.w3Service.vote(this.voterKey,this.candidateKey).subscribe(
      (res)=>{
        console.log(res);
        new Noty({
          type: 'success',
          layout: 'topRight',
          theme: 'metroui',
          closeWith: ['click'],
          text: 'You have successfully Voted! You are definitely a responsible citizen of India, proud of you!',
          animation: {
            open: 'animated fadeInRight',
            close: 'animated fadeOutRight'
          },
          timeout: 4000,
          killer: true
        }).show();
        this.ngxLoader.stop();
        this.router.navigateByUrl("/dashboard");
      },
      (error)=>{
        console.log(error);
        new Noty({
          type: 'error',
          layout: 'topRight',
          theme: 'metroui',
          closeWith: ['click'],
          text: 'Woops! There seems to be an error.',
          animation: {
            open: 'animated fadeInRight',
            close: 'animated fadeOutRight'
          },
          timeout: 4000,
          killer: true
        }).show();
      }
    )


  }


  ngOnInit() {
    this.userKey = localStorage.getItem("userKey");
    this.userId = localStorage.getItem("userId");
    this.electionId = localStorage.getItem("electionId");
    this.getPartyCandidates(); 
    console.log(this.decisionHelper);
  }

}
