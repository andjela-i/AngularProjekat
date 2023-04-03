import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as MoviesActions from './movies.action';
import { AngularprojekatService } from "src/app/services/angularprojekat.service";
import { mergeMap,map, catchError, of, merge } from "rxjs";


@Injectable()
export class MoviesEffects{

    constructor(private action$:Actions,private moviesService:AngularprojekatService){

    }

    loadMovie$= createEffect(()=>
    this.action$.pipe(
        ofType(MoviesActions.loadMovies),
        mergeMap(()=>
            this.moviesService.getAll().pipe(
                map((movies)=>MoviesActions.loadMoviesSuccess({movies:movies})),
                catchError(()=>of({type: 'loadError'}))
            )
            )
        ))
    
    addUser$ = createEffect(() => { 
        return this.action$.pipe(
            ofType(MoviesActions.addUser),
            mergeMap((action) => {
                return this.moviesService.addUser(action.username,action.email,action.password).pipe(map((data)=>
                console.log(data)))})
        );
    }, {dispatch: false})

    logIn$ = createEffect(()=>
         this.action$.pipe(
            ofType(MoviesActions.logIn),
            mergeMap((action) => 
                this.moviesService.logInUser(action.email, action.password).pipe(
                    map((users)=>(
                    MoviesActions.logInSuccess({user:users[0]}))),
                    catchError(()=>of({type:"load error"})
                ))
            
            )
        ));

        logIn2$ = createEffect(()=>
        this.action$.pipe(
           ofType(MoviesActions.logIn),
           mergeMap((action) => 
               this.moviesService.logInUser(action.email, action.password).pipe(
                   map((users)=>(
                   MoviesActions.loadReviewsUser({user:users[0]}))),
                   catchError(()=>of({type:"load error"})
               ))
           
           )
       ));
    
    dodajOmiljeni$ = createEffect(()=>
            this.action$.pipe(
                ofType(MoviesActions.dodajOmiljeni),
                mergeMap((action)=>
                    this.moviesService.dodajOmiljeni(action.movieId,action.user).pipe(
                        map((user)=>
                        MoviesActions.dodajOmiljeniSuccess({user:user})),
                        catchError(()=>of({type:"load error"}))
                             )
                        )
                    )
                );

    getReview$ = createEffect(()=>
    this.action$.pipe(
        ofType(MoviesActions.loadReviews),
        mergeMap((action)=>
            this.moviesService.getReviews(action.movieId).pipe(
                map((data)=>
                MoviesActions.loadReviewsSuccess({reviews:data})),
                catchError(()=>of({type:"load error"}))
            )
        ) ));
    
    addAReview$ = createEffect(()=>
                this.action$.pipe(
                    ofType(MoviesActions.addReview),
                    mergeMap((action)=>
                        this.moviesService.addReview(action.user,action.movie,action.review).pipe(
                            map((review)=>
                            MoviesActions.reviewUpdate({user:action.user,movie:action.movie,review:review})
                            )
                        ))
                )
    );

    addAReviewUpdate$ = createEffect(()=>
                        this.action$.pipe(
                            ofType(MoviesActions.reviewUpdate),
                            mergeMap((action)=>
                                this.moviesService.addReviewUpdate(action.user,action.movie,action.review).pipe(
                                    map((data)=>
                                    MoviesActions.reviewUpdateSuccess({review:data[0],user:data[1]})
                                    )
                                )
                            )

                        )
    )

    getReviewsUser$ = createEffect(()=>
    this.action$.pipe(
        ofType(MoviesActions.loadReviewsUser),
        mergeMap((action)=>
            this.moviesService.getReviewsUser(action.user).pipe(
                map((data)=>
                MoviesActions.loadReviewsUserSuccess({reviews:data})),
                catchError(()=>of({type:"load error"}))
            )
        ) ));
}