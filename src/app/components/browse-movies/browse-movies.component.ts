import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadMovies, selectMovie } from 'src/store/movies.action';
import { MoviesState } from 'src/store/movies.reducer';
import { selectMoviesList } from 'src/store/movies.selector';
import { AppState } from '../../app.state';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.scss']
})
export class BrowseMoviesComponent implements OnInit {

  movie$:  Observable<Movie[]>= of([]);
  movies: Movie[]=[];

  constructor(private store:Store<AppState>,private router:Router,private route:ActivatedRoute) { 
    this.ucitajFilmove()
  }


  ngOnInit(): void {
    this.movie$=this.store.select(selectMoviesList);
    console.log(this.movie$)
  
  }

  ucitajFilmove(){
    this.store.dispatch(loadMovies())
  }

  predstaviFilm(movie:Movie){
    this.router.navigate(['/movie-detailed']);
    this.store.dispatch(selectMovie({
      movieId:movie.id
    }))
    
  }

}
