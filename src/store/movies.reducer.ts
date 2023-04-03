
import { state } from "@angular/animations";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/movie";
import { Review } from "src/app/models/review";
import { User } from "src/app/models/user";
import * as Actions from './movies.action'

/* export interface MoviesState {
    lista: Movie[],
    selektovaniFilm: number;
} */

export interface MoviesState extends EntityState<Movie>{
    selektovaniFilm:number,
    korisnik:User,
    lista: Review[],
    listaUser: Review[]
}



/* export const initialState:MoviesState = {
    lista: [],
    selektovaniFilm: 0
} */

const adapterMovies = createEntityAdapter<Movie>();  

export const initialState:MoviesState=adapterMovies.getInitialState({
    selektovaniFilm:0,
    korisnik: {
        id: 0,
        username: "",
        email: "",
        password: "",
        favourites: [],
        reviews: []
    },
    lista:[],
    listaUser:[]
})


export const moviesReducer = createReducer(
    initialState,
    on(Actions.loadMoviesSuccess,(state,{ movies })=>
        adapterMovies.setAll(movies,state)
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
    on(Actions.logInSuccess,(state, { user})=>{
    return{
        ...state,
        korisnik:user,
    }}),
    on(Actions.dodajOmiljeniSuccess,(state,{ user })=>{
        return{
        ...state,
        korisnik:user
        }
    }),
    on(Actions.loadReviewsSuccess,(state, {reviews})=>{
        return{
            ...state,
            lista:reviews
        }
    }),
    on(Actions.reviewUpdateSuccess,(state,{review,user})=>{
        return{
            ...state,
            lista:state.lista.concat(review),
            korisnik:user
        }
    }),
    on(Actions.loadReviewsUserSuccess,(state,{reviews})=>{
        return{
            ...state,
            listaUser:reviews
        }
    })
)
    
