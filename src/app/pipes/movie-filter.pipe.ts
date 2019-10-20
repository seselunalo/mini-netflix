import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie.model';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], searchTerm: string): any {
    if (!movies || !searchTerm) {
      return movies;
    }
    // tslint:disable-next-line: no-unused-expression
    return movies.filter(movie =>
      // tslint:disable-next-line: no-unused-expression
      movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 );

  }

}
