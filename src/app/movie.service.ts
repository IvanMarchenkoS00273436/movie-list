import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {  title: 'The Shawshank Redemption', year: "1994", director: 'Frank Darabont' },
    {  title: 'The Godfather', year: "1972", director: 'Francis Ford Coppola' },
    {  title: 'The Godfather: Part II', year: "1974", director: 'Francis Ford Coppola' },
    {  title: 'The Dark Knight', year: "2008", director: 'Christopher Nolan' },
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movietitle: string, moviedirector: string, movieyear: string) {
    this.movieList.push({ title: movietitle, director: moviedirector, year: movieyear });
  }
}
