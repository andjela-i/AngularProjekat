import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectProfile } from 'src/store/movies.selector';
import { AppState } from '../app.state';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

user : User | null ;

constructor(private store:Store<AppState>, private router:Router){
this.user=null;
}

ngOnInit(): void {
  if(this.user!=null){
    if(this.user.id===0){
      this.router.navigate(['/sign-up']);
    }

  }
  this.store.select(selectProfile).subscribe(korisnik=>{
    this.user=korisnik
  }
  )


}

}
