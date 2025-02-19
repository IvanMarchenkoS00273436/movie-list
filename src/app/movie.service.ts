import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    new Movie('The Shawshank Redemption',"1994", 'Frank Darabont' ),
    new Movie('The Godfather', "1972", 'Francis Ford Coppola' ),
    new Movie('The Godfather: Part II',"1974",'Francis Ford Coppola' ),
    new Movie('The Dark Knight', "2008", 'Christopher Nolan' )
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movietitle: string, moviedirector: string, movieyear: string) {
    this.movieList.push({ title: movietitle, director: moviedirector, year: movieyear });
  }
}
