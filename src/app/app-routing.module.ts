import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheatherComponent } from './movie-theaters/create-movie-theather/create-movie-theather.component';
import { IndexMovieTheatherComponent } from './movie-theaters/index-movie-theather/index-movie-theather.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},


  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create-genre', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},                          //id BITNO

  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},

  {path: 'movietheaters/edit/id', component: EditMovieComponent},
  {path: 'movietheaters', component: IndexMovieTheatherComponent},
  {path: 'movietheater/create', component: CreateMovieTheatherComponent},
  
  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/id', component: EditMovieComponent},
  {path: 'movies/filter', component:MovieFilterComponent},
  {path: '**', redirectTo: ''} ,                    //wild card ako se ne uhvati ni jedan path vraca na root i brise pogresan URL//

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
