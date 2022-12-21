import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logIn } from 'src/store/movies.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{


  public loginForm !: FormGroup<any>;

  constructor(private formBuilder:FormBuilder, private store:Store<AppState>, private router:Router){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:[''],
    })
  }

  logIn(){
    this.store.dispatch(logIn(this.loginForm.value));
    this.router.navigate(['profile']);
  }

}
