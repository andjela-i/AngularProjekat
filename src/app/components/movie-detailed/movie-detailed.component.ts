import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { dodajOmiljeni } from 'src/store/movies.action';
import { selectMovie, selectProfile } from 'src/store/movies.selector';
import { selectSelectedMovieId } from 'src/store/movies.selector';
import { AppState } from '../../app.state';
import { Movie } from '../../models/movie';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.scss']
})
export class MovieDetailedComponent {

  _movie:Movie|null=null;
  user:User|null=null;

  @Input()
  set movie(value: Movie | null){
    this._movie=value;
  }

  constructor(private store: Store<AppState>, private dialog:MatDialog){
    this.movie={
      id:0,
      title:"",
      opis:"",
      link:"",
      godina:0,
      ocena:0,
      poster:""
      
    }
  }

  ngOnInit(): void {
    this.store.select(selectSelectedMovieId).subscribe(selektovaniFilm=>{
      if(this._movie)
      this._movie.id=selektovaniFilm
    });

    this.store.select(selectMovie).subscribe(film=>{
      if(this._movie)
      this._movie=film
       }
      )
      
      
  }

  openPopUp(){
    this.dialog.open(PopUpComponent);
  }


  dodajOmiljeni(){
    this.store.select(selectProfile).subscribe(korisnik=>{
      this.user=korisnik
    })
    if (this._movie&&this.user){
    const nesto={
      movieId:this._movie.id,
      userId:this.user.id
    }
    this.store.dispatch(dodajOmiljeni(nesto))
    }
  }

}
