import { FormGroup } from "@angular/forms";
import { createEffect } from "@ngrx/effects";
import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie";
import { Review } from "src/app/models/review";
import { User } from "src/app/models/user";


export const loadMovies = createAction("Load movies");
export const loadMoviesSuccess = createAction("Load movies success",props<{movies:Movie[]}>());
export const selectMovie = createAction("Selected a movie",props<{movieId:number}>());
export const addUser = createAction("Add user", props<{username:string,email:string,password:string}>());
export const addUserSuccess = createAction("Add user success");
export const logIn = createAction("Log in", props<{email:string,password:string}>());
export const logInSuccess = createAction("Log in success",props<{user:User}>());
export const dodajOmiljeni = createAction("Dodaj omiljeni",props<{movieId:number,user:User}>())
export const dodajOmiljeniSuccess = createAction("Dodaj omiljeni success",props<{user:User}>());
export const loadReviews = createAction("Load reviews",props<{movie:Movie}>());
export const loadReviewsSuccess = createAction("Load reviews success", props<{reviews:Review[]}>());
export const addReview = createAction("Add a review",props<{user:User,movie:Movie,review:string}>());
export const addReviewSuccess = createAction("Add review success",props<{review:Review}>());
export const reviewUpdate = createAction("Review update", props<{user:User,movie:Movie,review:Review}>());
export const reviewUpdateSuccess = createAction("Review update success", props<{review:Review,user:User}>());
export const loadReviewsUser = createAction("Load reviews user",props<{user:User}>());
export const loadReviewsUserSuccess = createAction("Load reviews user success",props<{reviews:Review[]}>());
export const loadAllUsers = createAction("Load users");
export const loadAllUsersSuccess = createAction("Load users success",props<{users:User[]}>());
export const updateUser = createAction("Update user",props<{user:FormGroup<any>}>());
export const updateUserSuccess = createAction("Update user success",props<{user:User}>());
export const deleteReview = createAction("delete a review",props<{review:Review}>());
export const deleteReviewSuccess = createAction("delete review success",props<{review:Review}>());
export const updateUsersReviews = createAction("upadate users reviews",props<{user:User,review:Review}>());
export const updateUsersReviewsSuccess = createAction("successfully updated users reviews");