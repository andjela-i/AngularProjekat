import { MovieReviewsState } from "src/store/movieReviews.reducer";
import { MoviesState } from "src/store/movies.reducer";
import { UsersState } from "src/store/users.reducer";

export interface AppState{
    movies: MoviesState;
    users: UsersState;
    movieReviews:MovieReviewsState
}