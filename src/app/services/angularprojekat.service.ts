import { HttpClient } from '@angular/common/http';
import { CommaExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { combineLatest, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { Review } from '../models/review';
import { Mutable, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AngularprojekatService {
  constructor(private httpClient: HttpClient) {}

  getAllMovies() {
    return this.httpClient.get<Movie[]>(environment.api + '/movies');
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(environment.api + '/users');
  }

  getUserById(userId: string) {
    return this.httpClient.get<User>(environment.api + '/users/' + userId);
  }

  getUserByUnsername(username: string) {
    return this.httpClient
      .get<User[]>(environment.api + '/users')
      .pipe(map((data) => data.filter((user) => user.username == username)));
  }

  updateUser(user: User, userId: string) {
    const userr = user;
    console.log(environment.api + '/users/' + '' + userId, userr);
    return this.httpClient.put<any>(
      environment.api + '/users/' + '' + userId,
      userr
    );
  }

  deleteReview(review: Review) {
    return this.httpClient.delete<Review>(
      environment.api + '/reviews/' + '' + review.id
    );
  }

  /* updateUsersReviews(user:User,review:Review){
    const user2: Mutable<User>={id:user.id,username:user.username,email:user.email,password:user.password,favourites:user.favourites,role:user.role};
    var niz:number[];
      niz=[]
      user2.reviews.forEach(element => {
        niz.push(element)
      });

      for( var i = 0; i < niz.length; i++){

        if ( niz[i] === review.id) {
            niz.splice(i, 1);
            i--;
        }
    }
    user2.reviews=niz;
    return this.httpClient.put<any>(environment.api+"/users/"+""+user2.id,user2);


  } */

  addUser(username: string, email: string, password: string) {
    var user = {
      username: username,
      email: email,
      password: password,
      favourites: [],
      reviews: [],
      role: '',
    };

    console.log(user);
    return this.httpClient.post<any>(environment.api + '/users', user);
  }

  logInUser(email: string, password: string) {
    /* return this.httpClient.get<User[]>(environment.api+"/users").pipe(
      map((data)=>data.filter(user=>user.email===email && user.password===password))
    ) */
    const data = {
      email: email,
      password: password,
    };
    return this.httpClient.post<User>(environment.api + '/users/login', data);
  }

  dodajOmiljeni(movieId: number, userr: User) {
    const user2: Mutable<User> = {
      id: userr.id,
      username: userr.username,
      email: userr.email,
      password: userr.password,
      favourites: userr.favourites,
      role: userr.role,
    };
    var niz: number[];
    niz = [];
    user2.favourites.forEach((element) => {
      niz.push(element);
    });
    niz.push(movieId);
    user2.favourites = niz;
    console.log(typeof user2.favourites);
    console.log(user2.favourites);
    console.log(environment.api + '/users/' + '' + userr.id, user2);
    return this.httpClient.put<User>(
      environment.api + '/users/' + '' + userr.id,
      user2
    );
  }

  getReviews(movie: Movie) {
    return this.httpClient
      .get<Review[]>(environment.api + '/reviews')
      .pipe(map((items) => items.filter((item) => movie.title == item.title)));
  }

  getReviewsUser(user: User) {
    return this.httpClient
      .get<Review[]>(environment.api + '/reviews')
      .pipe(
        map((items) => items.filter((item) => user.username == item.username))
      );
  }

  addReview(user: User, movie: Movie, review: string) {
    const r = {
      text: review,
      movieId: movie.id,
      username: user.username,
      title: movie.title,
      user: user.id,
    };
    return this.httpClient.post<any>(environment.api + '/reviews', r);
  }

  /* addReviewUpdate(user:User,movie:Movie,review:Review){
    const user2: Mutable<User>={id:user.id,username:user.username,email:user.email,password:user.password,favourites:user.favourites,reviews:user.reviews,role:user.role};
      var niz:number[];
      niz=[]
      user2.reviews.forEach(element => {
        niz.push(element)
      });
      niz.push(review.id);
      user2.reviews=niz;
      console.log(niz,user2.reviews);
      console.log(environment.api+"/users/"+""+user.id,user2);

      return combineLatest([this.httpClient.get<Review>(environment.api+"/reviews/"+review.id),this.httpClient.put<User>(environment.api+"/users/"+""+user.id,user2)]);

  } */
}
