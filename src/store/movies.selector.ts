import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Movie } from "src/app/models/movie";


export const selectMoviesFeature = createSelector(
    (state:AppState)=>state.movies,
    (movies)=>movies
)

export const selectSelectedMovieId = createSelector(
    selectMoviesFeature,
    (movies)=>movies.selektovaniFilm
)

export const selectMoviesList = createSelector(
    selectMoviesFeature,
    (movies)=>movies.ids.map(id=>movies.entities[id])
    .filter((movie)=>movie!= null)
    .map((movie)=><Movie>movie)
)

export const selectMovie=createSelector(
    selectMoviesFeature,
    selectSelectedMovieId,
    (movies,movieId)=><Movie>movies.entities[movieId]
)

export const selectProfile = createSelector(
    selectMoviesFeature,
    (movies)=>movies.korisnik

)
