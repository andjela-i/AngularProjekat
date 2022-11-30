import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadMovies } from 'src/store/movies.action';
import { MoviesState } from 'src/store/movies.reducer';
import { AppState } from '../app.state';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.scss']
})
export class BrowseMoviesComponent implements OnInit {

  movie$:  Observable<Movie[]>= of([]);
  movies: Movie[]=[];

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.movie$=this.store.select(state=>
        state.movies.lista
      )

      
    
  }

  ucitajFilmove(){
    this.store.dispatch(loadMovies())
  }

}
