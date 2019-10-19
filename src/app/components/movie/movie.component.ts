import { Component, OnInit , Input} from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  constructor(private router: Router) { }


  ngOnInit() {
  }
  onSelect(movie) {
    this.router.navigate(['/movies', movie.id]);
  }

}
