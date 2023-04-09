import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { selectProfile } from 'src/store/movies.selector';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss']
})
export class NavigacijaComponent implements OnInit {


  user!: User;


  constructor(private store:Store<AppState>) { 
    this.store.select(selectProfile).subscribe(korisnik=>{
    this.user=korisnik});
  }

  ngOnInit(): void {

  }

  isAdmin(): any {
    if (this.user.role==="admin"){
      return true
    }else{
      return false
    }
    }

}
