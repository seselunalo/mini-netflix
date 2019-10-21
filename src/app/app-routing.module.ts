import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FavouriteComponent } from './components/favourite/favourite.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'favourite', component: FavouriteComponent},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponets = [ MoviesComponent, MovieDetailComponent, FavouriteComponent];
