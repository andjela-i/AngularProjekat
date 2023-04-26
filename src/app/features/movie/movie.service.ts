import { HttpClient, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AppMovieService {
  constructor(private _http: HttpClient) {}

  fetchMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(environment.api + '/movies');
  }

  readMovie(movieId: any): Observable<Movie> {
    return this._http.get<Movie>(environment.api + '/movies/' + movieId);
  }
}
