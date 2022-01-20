import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private router5 : Router) { }

  ngOnInit(): void {

    
  }
  @Input()
  movies;

  remove(index: number){
    this.movies.splice(index, 1);
  }
}
