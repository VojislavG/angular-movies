import { Component, Input, OnInit, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css']
})
export class RaitingComponent implements OnInit {


  constructor() { }
  @Input()
  maxRaiting=5;
  @Input()
  selectedRate=0;
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();
  // @Output()
  // onRating: EventEmitter<number> = new EventEmitter<number>();
  previusRate = 0;
  maxRaitingArr;

  ngOnInit(): void {
  
  this.maxRaitingArr = Array(this.maxRaiting).fill(0);
}
  handleMouseEnter(index: number){
    this.selectedRate = index+1;

  
}
handleMouseLeave(){
  if(this.previusRate !==0){
    this.selectedRate=this.previusRate;
    
  }
  else{this.selectedRate = 0}
  
}
rate(index : number){
  this.selectedRate = index+1
  this.previusRate=this.selectedRate;
  this.onRating.emit(this.selectedRate);
  
  }
}