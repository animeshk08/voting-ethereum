import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AadharService  } from '../_service/aadhar.service';
import { stringify } from '@angular/compiler/src/util';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {vote} from '../../../../../blockchain/w3/addEntities';
import { W3Service } from '../_service/w3.service';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public aadhar:any;
  public userId;
  public userKey;
  public userAadharNum;
  public randNum;
  public env = environment;
  public domain = this.env['apiUrl'];
  public staticDomain;
  public staticPhone='media/assets/images/phone.jpg';
  public staticAge ='media/assets/images/age.png';
  public staticAadhar ='media/assets/images/aadhaar-1.jpg';
  public staticGender ='media/assets/images/gender.png';

  constructor(private route: ActivatedRoute,public aadharService:AadharService,private ngxLoader: NgxUiLoaderService,public w3Service:W3Service) { }

  public addVoter(userKey){
      this.w3Service.addVoter(userKey).subscribe(
        res=>{
          console.log(res);
        }
      )
  }

  hashCode = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }

  public getAadharDetails(){
    this.ngxLoader.start();
    this.aadharService.getAadharDetails(this.userId).subscribe(
      res=>{
        this.ngxLoader.start();
        this.aadhar = res;
        console.log(this.aadhar);
        this.userAadharNum = this.aadhar.aadhar_num;
        let rand = Math.floor(Math.random() * 10000000000000000);
        this.randNum = rand.toString();
       
        this.userKey = this.userAadharNum.concat(rand);
        console.log("manan")
        console.log(this.userKey);

        let hashAadhar = this.hashCode(this.userAadharNum);
        this.userKey = hashAadhar;
        this.addVoter(this.userKey);
        localStorage.setItem("userKey",this.userKey);
        // console.log(this.userAadharNum.hashCode());

        this.ngxLoader.stop();
        
     
      }
    )
  }

  ngOnInit() {
    this.ngxLoader.start();
    this.userId = localStorage.getItem("userId");
    console.log(this.userId);
    
    this.getAadharDetails();
    this.staticDomain=localStorage.getItem("staticDomain");

  }

}
