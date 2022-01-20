import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.moviesInTheaters = [{
        title: "Ko to tamo peva",
        releaseDate : new Date(),
        price: 1444.23, 
        poster: "https://m.media-amazon.com/images/M/MV5BMmJmMzZkNTQtOGViNi00OWI4LTg3MTctNDY5YTZjNzUzNTUxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg"
      },
      {
        title: "Ko to tamo peva",
        releaseDate : new Date(),
        price: 1444.23, 
        poster: "https://www.brightwalldarkroom.com/wp-content/uploads/2021/02/ko-to-tamo-peva.jpg"
      }];
    
      this.moviesFutureReleases;
      
        
      }
      moviesInTheaters;
      moviesFutureReleases;
  }


