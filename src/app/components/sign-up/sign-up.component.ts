import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addUser } from 'src/store/movies.action';
import { AngularprojekatService } from "src/app/services/angularprojekat.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signupForm !: FormGroup<any>;

  constructor(private formBuilder : FormBuilder, private store:Store<AppState>,private service:AngularprojekatService,private router:Router){

  }

  posaljiVrednosti(email:string,sifra:string){
    console.log(email,sifra)
  }
 

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:[''],
      email:[''],
      password:[''],
    })
  }

  signUp(){
    this.store.dispatch(addUser(this.signupForm.value))
    this.signupForm.reset();
    this.router.navigate(['/log-in']);
  }

}

