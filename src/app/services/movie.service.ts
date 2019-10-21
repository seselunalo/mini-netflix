import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesComponent } from '../components/movies/movies.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    new Movie(
      101,
      'Star Wars - The Last Jedi',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      101,
      'Star Wars - The Last Jedi',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      103,
      'Baby Driver',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      104,
      'Mother',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/jmes-jean-mother.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      105,
      'Strange Things',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/stranger-things.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      106,
      'Dark Night',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/darkknight-rorykurtz-mondoprint-full.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      107,
      'Casa Blanca',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/rory-kurtz-cas-blanca.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      108,
      'Hook',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/hook_onesheet_usa_drewstruzan.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    ),
    new Movie(
      109,
      'The Graduate',
      'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/the_graduate.jpg',
      9 / 10,
      new Date('2017'),
      152,
      'Sci-Fi',
      'Rian Johnson',
      'Rian Johnson',
      ['Mark Hamill', 'Carrie Fisher', 'Adam Driver'],
      // tslint:disable-next-line: max-line-length
      'The plot of Dooku: Jedi Lost is fast-paced ,engaging, and, at times, haunting. ... However, as Asajj learns more about Dooku\'s life, she also discovers some of the dark secrets of his past that ultimately transformed him from a young, idealistic Padawan to a sadistic Sith Lord.',
      'English',
      'United States',
      ['Oscar', 'Golden Globe'],
      'https://www.youtube.com/watch?v=-MN6hlJEVK0'
    )
  ];
  constructor() {}
  getMovies() {
    return this.movies;
  }
  getMovie(id: number) {
    return this.movies.find(movie => movie.id === id);
  }
  addFavourite(movie: Movie) {
    const loadedFavs = this.getStoredFavs();
    console.log(loadedFavs);
    loadedFavs.push(movie.id);
    localStorage.setItem('favmovies', JSON.stringify(loadedFavs));
  }
  getFavourite(): Movie[] {
    const data = [...new Set(this.getStoredFavs())];
    const favMovies: Movie[] = [];
    if (data.length > 0) {
      data.forEach(id => {
        // tslint:disable-next-line: radix
        favMovies.push (this.movies.find(movie => movie.id === parseInt(id)));
      });
    }
    return favMovies;
  }
  private getStoredFavs(): any[] {
    const data =  JSON.parse(localStorage.getItem('favmovies'));
    return !data ? [] : data;
  }
}
