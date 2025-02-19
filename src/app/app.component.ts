import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AddMovieComponent, ListMoviesComponent, MovieDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'movie-list';

  public mySelectedMovie!:Movie;

  movies: any[] = [];

  constructor(private movieService:MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  setSelectedMovie(movie:Movie) {
    this.mySelectedMovie = movie;
  }
}
