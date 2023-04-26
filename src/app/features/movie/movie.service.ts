import { HttpClient, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieReview } from 'src/app/models/review';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AppMovieService {
  constructor(private _http: HttpClient) {}

  fetchMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(environment.api + '/movies');
  }

  fetchMovieReviews(movieId: any): Observable<MovieReview[]> {
    // TODO: create this API
    return this._http.get<MovieReview[]>(
      environment.api + `/movie-reviews/${movieId}`
    );
  }

  readMovie(movieId: any): Observable<Movie> {
    return this._http.get<Movie>(environment.api + '/movies/' + movieId);
  }
}

export class AppMovieStoreService extends BehaviorSubject<Movie[]> {
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(private _service: AppMovieService) {
    super([]);
  }

  refresh(): void {
    this.loading$.next(true);

    this._service.fetchMovies().subscribe({
      next: (d) => {
        this.next(d);
      },
      error: (d) => {
        this.next([]);
      },
      complete: () => {
        this.loading$.next(false);
      },
    });
  }
}

export class AppMovieReviewStoreService extends BehaviorSubject<MovieReview[]> {
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(private _service: AppMovieService) {
    super([]);
  }

  private _lastMovieId: any = '';
  fetch(movieId: any): void {
    this._lastMovieId = movieId;
    this.loading$.next(true);

    this._service.fetchMovieReviews(movieId).subscribe({
      next: (d) => {
        this.next(d);
      },
      error: (d) => {
        this.next([]);
      },
      complete: () => {
        this.loading$.next(false);
      },
    });
  }

  reload(): void {
    this.fetch(this._lastMovieId);
  }
}
