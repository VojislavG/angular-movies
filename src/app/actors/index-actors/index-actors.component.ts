import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {

  constructor(private router2: Router) { }

  ngOnInit(): void {
  }

  makeActor(){
this.router2.navigate(["actors/create"])
  }
}
