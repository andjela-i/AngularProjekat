import { FormGroup } from "@angular/forms";
import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie";


export const loadMovies = createAction("Load movies");
export const loadMoviesSuccess = createAction("Load movies success",props<{movies:Movie[]}>());
export const selectMovie = createAction("Selected a movie",props<{movieId:number}>());
export const addUser = createAction("Add user", props<{signupForm:FormGroup<any>}>());