import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addUser } from 'src/store/movies.action';
import { AngularprojekatService } from "src/app/services/angularprojekat.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signupForm !: FormGroup<any>;

  constructor(private formBuilder : FormBuilder, private store:Store<AppState>,private service:AngularprojekatService){

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
    this.service.addUser(this.signupForm.value)
    ;
    console.log(this.signupForm.value);
    this.signupForm.reset();

  }

}

