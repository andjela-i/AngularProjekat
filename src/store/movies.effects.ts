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
                    map((users)=>
                    MoviesActions.logInSuccess({user:users[0]})),
                    catchError(()=>of({type:"load error"})
                ))
            
            )
        ));
    
    dodajOmiljeni$ = createEffect(()=>
            this.action$.pipe(
                ofType(MoviesActions.dodajOmiljeni),
    )
    )
    

}