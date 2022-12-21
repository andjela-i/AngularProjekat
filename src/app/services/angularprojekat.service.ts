import { HttpClient } from '@angular/common/http';
import { CommaExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { User } from '../models/user'

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

    dodajOmiljeni(movieId:number,userId:number){
      return this.httpClient.get<User[]>(environment.api+"/users").pipe(
        map((data)=>data.filter(user=>user.id===userId))
      )

    
  }


}