import * as Actions from './movies.action';
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Review } from 'src/app/models/review';
import { User } from "src/app/models/user";


const adapterMovieReviews = createEntityAdapter<Review>()
export interface MovieReviewsState extends EntityState<Review>{

}

export const initialState:MovieReviewsState = adapterMovieReviews.getInitialState();

export const movieReviewsReducer = createReducer(
    initialState,
    on(Actions.loadReviewsSuccess,(state, { reviews })=>
        adapterMovieReviews.setAll(reviews,state)
    
    ),
    on(Actions.deleteReviewSuccess,(state,{review})=>
        adapterMovieReviews.removeOne(review.id,state)
    ),
    on(Actions.addReviewSuccess,(state,{review})=>
        adapterMovieReviews.addOne(review,state)
    )
)