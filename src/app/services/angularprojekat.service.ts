import { HttpClient } from '@angular/common/http';
import { CommaExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { combineLatest, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { Review } from '../models/review';
import { Mutable, User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AngularprojekatService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Movie[]>(environment.api+"/movies");
  }

  addUser(username:string,email:string,password:string){
    
    var user = {
    username:username,
    email:email,
    password:password,
    favourites:[],
    reviews:[]
    }

    console.log(user)
    return this.httpClient.post<any>(environment.api+"/users",user)   
  }

  logInUser(email:string,password:string){
    return this.httpClient.get<User[]>(environment.api+"/users").pipe(
      map((data)=>data.filter(user=>user.email===email && user.password===password))
    )
    }

    dodajOmiljeni(movieId:number,userr:User){
      const user2: Mutable<User>={id:userr.id,username:userr.username,email:userr.email,password:userr.password,favourites:userr.favourites,reviews:userr.reviews};
      var niz:number[];
      niz=[]
      user2.favourites.forEach(element => {
        niz.push(element)
      });
      niz.push(movieId);
      user2.favourites=niz;
      console.log(typeof user2.favourites);
      console.log(user2.favourites);
      console.log(environment.api+"/users/"+""+userr.id,user2);
      return this.httpClient.put<any>(environment.api+"/users/"+""+userr.id,user2);
  }

  getReviews(movieId:number){
    return this.httpClient.get<Review[]>(environment.api+"/reviews").pipe(
      map(items=>
        items.filter(item=>movieId==item.movieId)
        ) 
    )
  }

  getReviewsUser(user:User){
    return this.httpClient.get<Review[]>(environment.api+"/reviews").pipe(
      map(items=>
        items.filter(item=>user.username==item.username)
        ) 
    ) 
  }

  addReview(user:User,movie:Movie,review:string){
    const r ={
      text:review,
      movieId:movie.id,
      username:user.username,
      title:movie.title
    }
    return this.httpClient.post<any>(environment.api+"/reviews",r);
  }

  addReviewUpdate(user:User,movie:Movie,review:Review){
    const user2: Mutable<User>={id:user.id,username:user.username,email:user.email,password:user.password,favourites:user.favourites,reviews:user.reviews};
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

  }




}