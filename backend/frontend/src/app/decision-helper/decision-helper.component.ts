// declare const require: any;
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import * as materialize from 'materialize-css';


var RTIdata = [
  {
    title:" Education ",
    desc:"Know what this candidate has done for your constituency in the field of education in the past tenure",
    link:" https://sscer.org/MATTER/RTI%20reply%20for%20the%20month%20of%20Dec_2016.pdf"
  },
  {
    title:" Health ",
    desc:"Know what this candidate has done for your constituency in the field of Health in the past tenure",
    link:" https://sscer.org/MATTER/RTI%20reply%20for%20the%20month%20of%20Dec_2016.pdf"
  },
  {
    title:" Roads ",
    desc:" Know what this candidate has done for your constituency in the field of transport in the past tenure",
    link:" https://sscer.org/MATTER/RTI%20reply%20for%20the%20month%20of%20Dec_2016.pdf"
  },
  {
    title:" Criminal charges ",
    desc:" Know what this candidate has any criminal charges in the past",
    link:" https://sscer.org/MATTER/RTI%20reply%20for%20the%20month%20of%20Dec_2016.pdf"
  },
  {
    title:" Salary ",
    desc:" description of his salary",
    link:" https://sscer.org/MATTER/RTI%20reply%20for%20the%20month%20of%20Dec_2016.pdf"
  }
]

@Component({
  selector: 'app-decision-helper',
  templateUrl: './decision-helper.component.html',
  styleUrls: ['./decision-helper.component.css']
})
export class DecisionHelperComponent implements OnInit {
  public rtiData;
  constructor() { }

  ngOnInit() {
    this.rtiData = RTIdata;
  }

}
