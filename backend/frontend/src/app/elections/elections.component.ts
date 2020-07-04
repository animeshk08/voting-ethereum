import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElectionsDetailService } from '../_service/elections-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})

export class ElectionsComponent implements OnInit {
  public elections;
  public userId;
  public upcomingOrpast;
  public env = environment;
  public domain = this.env['apiUrl'];
  public time;
  constructor(public electionsService:ElectionsDetailService,private route: ActivatedRoute,public router:Router,private ngxLoader: NgxUiLoaderService) { }

  public getUpcomingElections(){
    this.ngxLoader.start();
    this.electionsService.getUpComingElections(this.userId).subscribe(
      res=>{
        console.log(res);
        this.elections = res;
        this.ngxLoader.stop();
        this.countDown();
        
      }
    )
  }

  public getPastElections(){
    this.ngxLoader.start();
    this.electionsService.getPastElections(this.userId).subscribe(
      res=>{
        console.log(res);
        this.elections = res;
        this.ngxLoader.stop();
        this.countDown();
      }
    )
  }

  public onSelectElectionId(ElectionId){
    localStorage.setItem("electionId",ElectionId);
    this.router.navigateByUrl("/vote");

  }

  public countDown(){
    console.log("here")
    console.log(this.elections[0].start_date);
    var countDownDate = new Date(this.elections[0].start_date).getTime();

    // Update the count down every 1 second
      setInterval(()=>{
      console.log("yee manan")
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";
      
      console.log( days + "days " + hours + "hours "+ minutes + "minutes " + seconds + "seconds");
      this.time = days + "days " + hours + "hours "+ minutes + "minutes " + seconds + "seconds";
    }, 1000);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.upcomingOrpast = params['str'];
    });

    this.userId = localStorage.getItem("userId");

    if(this.upcomingOrpast=='upcoming'){
      this.getUpcomingElections();
      console.log("upcoming");
    }
    else{
      this.getPastElections();
    }

    

  }
}
