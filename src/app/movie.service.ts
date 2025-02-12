import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    { id: 1, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont' },
    { id: 2, title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola' },
    { id: 3, title: 'The Godfather: Part II', year: 1974, director: 'Francis Ford Coppola' },
    { id: 4, title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan' },
  ];

  getMovies() {
    return this.movieList;
  }
}
