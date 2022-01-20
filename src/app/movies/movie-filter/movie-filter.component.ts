  import { Component, OnInit } from '@angular/core';
  import {FormBuilder, FormGroup } from '@angular/forms';

  @Component({
    selector: 'app-movie-filter',
    templateUrl: './movie-filter.component.html',
    styleUrls: ['./movie-filter.component.css']
  })
  export class MovieFilterComponent implements OnInit {

    constructor(private formBuilder: FormBuilder) { }

    form: FormGroup;
   
    genres=[{id:1, name:'Drama'},{id:2, name:'Comedy'},{id:3,name:'Horror'}];
    movies=[{title:"spiderman", poster:"https://m.media-amazon.com/images/M/MV5BMmJmMzZkNTQtOGViNi00OWI4LTg3MTctNDY5YTZjNzUzNTUxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg"
  },
            {title:"Moana", poster:"https://m.media-amazon.com/images/M/MV5BMmJmMzZkNTQtOGViNi00OWI4LTg3MTctNDY5YTZjNzUzNTUxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg"
          },
            {title:"ko to tamo peva", poster:"https://m.media-amazon.com/images/M/MV5BMmJmMzZkNTQtOGViNi00OWI4LTg3MTctNDY5YTZjNzUzNTUxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg"
          }]
    originalMovies= this.movies;
    ngOnInit(): void {
      this.form = this.formBuilder.group({
          title: "",
          genreId: 0,
          upcomingReleases: false,
          inTheaters: false
      });

      this.form.valueChanges
      .subscribe(values =>{
        this.movies = this.originalMovies;
        console.log(this.movies)
        
        this.filterMovies(values);
        console.log(values)

        
        }   
      );
      
    }
    clearForm(){
        this.form.reset();
    }
    filterMovies(values: any){
      if (values.title){
        this.movies = this.movies.filter(movie => movie.title.indexOf(values.title)!==-1)
        
      
      }

  }
}
