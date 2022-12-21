import { FormGroup } from "@angular/forms";
import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie";
import { User } from "src/app/models/user";


export const loadMovies = createAction("Load movies");
export const loadMoviesSuccess = createAction("Load movies success",props<{movies:Movie[]}>());
export const selectMovie = createAction("Selected a movie",props<{movieId:number}>());
export const addUser = createAction("Add user", props<{username:string,email:string,password:string}>());
export const addUserSuccess = createAction("Add user success");
export const logIn = createAction("Log in", props<{email:string,password:string}>());
export const logInSuccess = createAction("Log in success",props<{user:User}>());
export const dodajOmiljeni = createAction("Dodaj omiljeni",props<{movieId:number,userId:number}>())
export const dodajOmiljeniSuccess = createAction("Dodaj omiljeni success",props<{movieId:number}>());