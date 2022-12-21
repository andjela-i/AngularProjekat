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
    
    addUser$ = createEffect(()=>
    this.action$.pipe(
        ofType(MoviesActions.addUser),
        mergeMap(action=>{
            return this.moviesService.addUser(action.signupForm)
        }
            )
    )
    )

}