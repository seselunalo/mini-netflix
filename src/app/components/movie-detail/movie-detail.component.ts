import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  detailId: any;
  favMovie : Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.detailId = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    this.movie = this.movieService.getMovie(parseInt(this.detailId));
  }

  addToFavourites(movie: Movie) {
    this.movieService.addFavourite(movie);
  }
}
