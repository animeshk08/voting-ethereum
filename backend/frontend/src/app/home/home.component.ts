import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from '../_service/auth.service';
import { stringify } from '@angular/compiler/src/util';


// import { Web3 } from 'web3';
// import {NgNoty, NotyOptions} from "ng-noty";
import * as Noty from 'noty';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mobNo:any;
  public web3js;
  public userId;
  public staticDomain;
  public staticHome = '/media/assets/images/home.jpg';
  constructor(private ngxLoader: NgxUiLoaderService,public authService:AuthService,public router:Router) { }

  public onEnterMobNo(event){
    this.mobNo = event.target.value;
  };
  
  public getId(){
    this.ngxLoader.start();
    this.authService.getAuthenticated(this.mobNo).subscribe(
      res=>{
        res = JSON.parse(stringify(res));
        this.userId = res["id"];
        localStorage.setItem("userId", this.userId);
        this.router.navigateByUrl("/dashboard");
        // this.ngNoty.create(<NotyOptions>{
        //   text: 'Some notification text'
        // }).show();
        console.log(res);
        new Noty({
          type: 'success',
          layout: 'topRight',
          theme: 'metroui',
          closeWith: ['click'],
          text: 'You are logged in successfully!',
          animation: {
            open: 'animated fadeInRight',
            close: 'animated fadeOutRight'
          },
          timeout: 4000,
          killer: true
        }).show();
        this.ngxLoader.stop();
      }
      
    )
  }

  public startApp(){
  
  }
  
  ngOnInit() {
    this.staticDomain = localStorage.getItem("staticDomain");
    console.log(this.staticDomain);
  }
  

 

}
