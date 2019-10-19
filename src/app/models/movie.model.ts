export class Movie {
  constructor(
    public id: number,
    public title: string,
    public posterUrl: string,
    public rating: number,
    public released: Date,
    public runtime: number,
    public genre: string,
    public director: string,
    public writer: string,
    public actors: string[],
    public plot: string,
    public language: string,
    public country: string,
    public awards: string[],
    public trailerUrl: string

  ) {}
}
