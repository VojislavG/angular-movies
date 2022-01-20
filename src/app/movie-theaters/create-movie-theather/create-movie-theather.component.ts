import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie-theather',
  templateUrl: './create-movie-theather.component.html',
  styleUrls: ['./create-movie-theather.component.css']
})
export class CreateMovieTheatherComponent implements OnInit {

  constructor(private router4 : Router) { }

  ngOnInit(): void {
  }
createTheater(){
  this.router4.navigate(["movietheaters"])
}
}
