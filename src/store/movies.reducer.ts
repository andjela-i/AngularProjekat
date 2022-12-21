
import { state } from "@angular/animations";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/movie";
import { User } from "src/app/models/user";
import * as Actions from './movies.action'

/* export interface MoviesState {
    lista: Movie[],
    selektovaniFilm: number;
} */

export interface MoviesState extends EntityState<Movie>{
    selektovaniFilm:number,
    korisnik:User
}

/* export const initialState:MoviesState = {
    lista: [],
    selektovaniFilm: 0
} */

const adapter = createEntityAdapter<Movie>();

export const initialState:MoviesState=adapter.getInitialState({
    selektovaniFilm:0,
    korisnik: {
        id: 0,
        username: "",
        email: "",
        password: "",
        favourites: [],
        reviews: []
    }
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
    }),
    on(Actions.logInSuccess,(state, { user })=>{
    return{
        ...state,
        korisnik:user
    }
}
    
    )
)
    
