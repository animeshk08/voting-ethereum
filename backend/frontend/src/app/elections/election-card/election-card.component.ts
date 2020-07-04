import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-election-card',
  templateUrl: './election-card.component.html',
  styleUrls: ['./election-card.component.css']
})
export class ElectionCardComponent implements OnInit {
  @Input() election:any;
  @Input() index:any;
  @Output() electionIdEmitter = new EventEmitter<any>();
  constructor() { }

  public EmitIndex(){
    this.electionIdEmitter.emit(this.election.id);
  }

  ngOnInit() {
  }

}
