import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-movie-theather',
  templateUrl: './index-movie-theather.component.html',
  styleUrls: ['./index-movie-theather.component.css']
})
export class IndexMovieTheatherComponent implements OnInit {

  constructor(private router3: Router) { }

  ngOnInit(): void {
  }

  addTheater(){
    this.router3.navigate(["movietheater/create"])
  }
}
