import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, shareReplay, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { ReviewPopUpComponent } from 'src/app/features/movie/components/review-pop-up/review-pop-up.component';
import { addReview, dodajOmiljeni, loadReviews } from 'src/store/movies.action';
import { AppState } from '../../../../app.state';
import { Movie } from '../../../../models/movie';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import {
  AppMovieReviewStoreService,
  AppMovieService,
} from '../../movie.service';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.scss'],
})
export class MovieDetailedComponent {
  _movie: Movie | null = {
    id: -1,
    title: '',
    opis: '',
    link: '',
    godina: 0,
    ocena: 0,
    poster: '',
  };
  _user: User = {
    id: -1,
    username: '',
    email: '',
    password: '',
    favourites: [],
    role: '',
  };
  movieId$: Observable<any>;
  movie$: Observable<Movie>;
  reviews$: AppMovieReviewStoreService;

  @Input()
  set movie(value: Movie | null) {
    this._movie = value;
  }

  @Input()
  set user(value: User) {
    this._user = value;
  }

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _movies: AppMovieService
  ) {
    this.movieId$ = this.route.paramMap.pipe(
      map((d) => d.get('movieId')),
      tap((d) => {
        this.reviews$.fetch(d);
      }),
      shareReplay()
    );

    this.movie$ = this.movieId$.pipe(
      switchMap((movieId) => _movies.readMovie(movieId)),
      tap((d) => {
        this.reviews$.fetch(d);
        this._movie = d;
      }),
      shareReplay()
    );

    this.reviews$ = new AppMovieReviewStoreService(_movies);
  }

  ngOnInit(): void {
    // this.store.select(selectProfile).subscribe((user) => {
    //   this.user = user;
    // });
    if (this._movie) {
      const unos = {
        movie: this._movie,
      };
      this.store.dispatch(loadReviews(unos));
    }
  }

  openPopUp() {
    this.dialog.open(PopUpComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }

  openReviewPopUp() {
    if (!this.user || !this._movie) {
      return;
    }

    const reviewPayload = {
      user: this._user,
      movie: this._movie,
      review: '',
    };

    const popup = this.dialog.open(ReviewPopUpComponent, {
      width: '40%',
      height: '300px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: this._movie?.title,
      },
    });

    popup.afterClosed().subscribe((reviewText) => {
      reviewPayload.review = reviewText;
      this.store.dispatch(addReview(reviewPayload));
      this.reviews$.reload();
    });
  }

  dodajFavourite() {
    if (this._user.id === 0) {
      this.router.navigate(['/log-in']);
      return;
    }
    console.log(this._user);
    console.log(this._movie);

    if (this._movie && this._user) {
      const nesto = {
        movieId: this._movie.id,
        user: this._user,
      };
      this.store.dispatch(dodajOmiljeni(nesto));
    }
  }

  parentEventHandler(valueEmited: string) {
    this.reviews$.reload();
  }
}
