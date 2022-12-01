
import { state } from "@angular/animations";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/movie";
import * as Actions from './movies.action'

/* export interface MoviesState {
    lista: Movie[],
    selektovaniFilm: number;
} */

export interface MoviesState extends EntityState<Movie>{
    selektovaniFilm:number
}

/* export const initialState:MoviesState = {
    lista: [],
    selektovaniFilm: 0
} */

const adapter = createEntityAdapter<Movie>();

export const initialState:MoviesState=adapter.getInitialState({
    selektovaniFilm:0
})


export const moviesReducer = createReducer(
    initialState,
    on(Actions.loadMoviesSuccess,(state,{ movies })=>
        adapter.setAll(movies,state)
        /* return { 
            ...state,
            lista:movies
        }; */
    ),
    on(Actions.selectMovie,(state,{movieId})=>{
        return{
            ...state,
            selektovaniFilm:movieId
        }
    })
)
    
