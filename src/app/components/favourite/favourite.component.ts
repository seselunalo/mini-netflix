import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component ({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  movies: Movie[];
  searchTerm: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getFavourite();
  }

}
