import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Movie } from "src/app/models/movie";
import { Review } from "src/app/models/review";
import { User } from "src/app/models/user";


export const selectMoviesFeature = createSelector(
    (state:AppState)=>state.movies,
    (movies)=>movies
)

export const selectUsersFeature = createSelector(
    (state:AppState)=>state.users,
    (users)=>users
)

export const selectMovieReviewsFeature = createSelector(
    (state:AppState)=>state.movieReviews,
    (movieReviews)=>movieReviews
)

export const selectMovieReviews = createSelector(
    selectMovieReviewsFeature,
    (movieReviews)=>movieReviews.ids.map(id=>movieReviews.entities[id])
    .filter((movieReview)=>movieReview!=null)
    .map((movieReview)=><Review>movieReview)
)

export const selectUsersList = createSelector(
    selectUsersFeature,
    (users)=>users.ids.map(id=>users.entities[id])
    .filter((user)=>user!=null)
    .map((user)=><User>user)
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

export const selectReviews = createSelector(
    selectMoviesFeature,
    (movies)=>movies.lista
)

export const selectReviewsUser = createSelector(
    selectMoviesFeature,
    (movies)=>movies.listaUser
)

export const selectAllUsers = createSelector(
    selectMoviesFeature,
    (movies)=>movies.users
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
