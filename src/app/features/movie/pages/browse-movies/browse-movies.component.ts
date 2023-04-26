import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadMovies, selectMovie } from 'src/store/movies.action';
import { MoviesState } from 'src/store/movies.reducer';
import { selectMoviesList } from 'src/store/movies.selector';
import { AppState } from '../../../../app.state';
import { Movie } from '../../../../models/movie';
import { AppMovieService, AppMovieStoreService } from '../../movie.service';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.scss'],
})
export class BrowseMoviesComponent implements OnInit {
  movie$: AppMovieStoreService;
  movies: Movie[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private _movies: AppMovieService
  ) {
    this.movie$ = new AppMovieStoreService(this._movies);
    this.ucitajFilmove();
  }

  ngOnInit(): void {}

  ucitajFilmove() {
    this.store.dispatch(loadMovies());
  }

  /* predstaviFilm(movie: Movie) {
    this.router.navigate(['/movie-detailed']);
    this.store.dispatch(
      selectMovie({
        movieId: movie.id,
      })
    );
  } */
}
