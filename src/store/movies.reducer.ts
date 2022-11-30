
import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/movie";
import * as Actions from './movies.action'

export interface MoviesState {
    lista: Movie[]
}

export const initialState:MoviesState = {
    lista: []
}

export const moviesReducer = createReducer(
    initialState,
    on(Actions.loadMoviesSuccess,(state,{ movies })=>{
        return { 
            ...state,
            lista:movies
        };
    })
    
)