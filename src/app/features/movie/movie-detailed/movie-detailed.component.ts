import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Review } from 'src/app/models/review';
import { User } from 'src/app/models/user';
import { ReviewPopUpComponent } from 'src/app/features/movie/review-pop-up/review-pop-up.component';
import { addReview, dodajOmiljeni, loadReviews } from 'src/store/movies.action';
import {
  selectMovie,
  selectMovieReviews,
  selectProfile,
  selectReviews,
} from 'src/store/movies.selector';
import { selectSelectedMovieId } from 'src/store/movies.selector';
import { AppState } from '../../../app.state';
import { Movie } from '../../../models/movie';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { AppTranslationLoader } from 'src/app/services/translation-loader.service';
import { AppMovieService } from '../movie.service';

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
  reviews: Review[] | null = null;
  review$: Observable<Review[]> = of([]);
  movie$: Observable<Movie>;

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
    this.movie$ = this.route.paramMap.pipe(
      switchMap((d) => _movies.readMovie(d.get('movieId'))),
      tap((d) => {
        this._movie = d;
      })
    );
  }

  ngOnInit(): void {
    this.store.select(selectSelectedMovieId).subscribe((selektovaniFilm) => {
      if (this._movie) this._movie.id = selektovaniFilm;
    });

    this.store.select(selectMovie).subscribe((film) => {
      if (this._movie) this._movie = film;
    });
    this.store.select(selectProfile).subscribe((user) => {
      this.user = user;
    });
    if (this._movie) {
      const unos = {
        movie: this._movie,
      };
      this.store.dispatch(loadReviews(unos));
    }

    this.review$ = this.store.select(selectMovieReviews);
  }

  openPopUp() {
    this.dialog.open(PopUpComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }

  openReviewPopUp() {
    const popup = this.dialog.open(ReviewPopUpComponent, {
      width: '40%',
      height: '300px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: this._movie?.title,
      },
    });
    popup.afterClosed().subscribe((item) => {
      if ((this.user != null, this._movie)) {
        const input = {
          user: this._user,
          movie: this._movie,
          review: item,
        };
        this.store.dispatch(addReview(input));
        this.review$ = this.store.select(selectMovieReviews);
      }
    });
  }

  dodajFavourite() {
    if (this._user.id === 0) {
      this.router.navigate(['/log-in']);
      return;
    } else {
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
  }

  parentEventHandler(valueEmited: string) {
    if (this._movie) {
      const unos = {
        movie: this._movie,
      };
      this.store.dispatch(loadReviews(unos));
    }

    this.review$ = this.store.select(selectMovieReviews);
  }
}
