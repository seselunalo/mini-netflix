import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieComponent } from './components/movie/movie.component';

import { MovieService } from './services/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    FooterComponent,
    MovieDetailComponent,
    MovieComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
