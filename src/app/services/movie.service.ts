import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() {}
  getMovies() {
    return [
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
  }
}
