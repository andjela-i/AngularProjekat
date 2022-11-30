import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie";


export const loadMovies = createAction("Load movies");
export const loadMoviesSuccess = createAction("Load movies success",props<{movies:Movie[]}>())