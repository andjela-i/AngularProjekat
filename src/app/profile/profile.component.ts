import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { loadReviewsUser, selectMovie } from 'src/store/movies.action';
import { selectMoviesList, selectProfile, selectReviews, selectReviewsUser } from 'src/store/movies.selector';
import { AppState } from '../app.state';
import { Movie } from '../models/movie';
import { Review } from '../models/review';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

movie$:  Observable<Movie[]>= of([]);
movies: Movie[]=[];
favMovie$: Observable<Movie[]>=of([]);
review$:  Observable<Review[]>= of([]);

user : User | null ;

constructor(private store:Store<AppState>, private router:Router){
  this.user=null;
  this.store.select(selectProfile).subscribe(korisnik=>{
    this.user=korisnik});

}

ngOnInit(): void {

  if(this.user!=null){
  const unos={
    user:this.user
  }
  this.store.dispatch(loadReviewsUser(unos))
  }

 
  this.movie$=this.store.select(selectMoviesList)
  if(this.user==null){
    this.router.navigate(['/sign-up'])
    console.log(this.user);
  }
  this.review$=this.store.select(selectReviewsUser);


  
  this.store.select(selectProfile).subscribe(korisnik=>{
    this.user=korisnik;
    this.movie$= this.movie$.pipe(
      map(items=>
        items.filter(item=>this.user?.favourites.includes(item.id))
        )  
    )
    this.review$=this.store.select(selectReviewsUser)
    console.log(this.movie$);
  }
  )


}

predstaviFilm(movie:Movie){
  this.router.navigate(['/movie-detailed']);
  this.store.dispatch(selectMovie({
    movieId:movie.id
  }))
  
}

}
