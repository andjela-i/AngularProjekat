import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../app.state';
import { AngularprojekatService } from '../services/angularprojekat.service';
import { Store } from '@ngrx/store';
import { addUser, updateUser } from 'src/store/movies.action';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { inject } from '@angular/core';
import { User } from '../models/user';
import { DialogRef } from '@angular/cdk/dialog';
import * as Actions from 'src/store/movies.action'

@Component({
  selector: 'app-update-pop-up',
  templateUrl: './update-pop-up.component.html',
  styleUrls: ['./update-pop-up.component.scss']
})
export class UpdatePopUpComponent implements OnInit {


  roleList=['admin','user'];

  public signupForm !: FormGroup<any>;
  user:User|null=null;

  constructor(private formBuilder : FormBuilder, private store:Store<AppState>,private service:AngularprojekatService,
    @Inject(MAT_DIALOG_DATA) public data:any, private dialog:MatDialogRef<UpdatePopUpComponent>){

    

  }

  posaljiVrednosti(email:string,sifra:string){
    console.log(email,sifra)
  }
 

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl('',Validators.required),
      id: new FormControl(),
      favourites:  new FormControl()
    });
    if(this.data.userId!=null&&this.data.userId!=""){
      this.service.getUserById(this.data.userId).subscribe((user)=>{
        this.user=user;
        this.signupForm.setValue({id:this.user.id,username:this.user.username,email:this.user.email,password:this.user.password,
        favourites:this.user.favourites,role:this.user.role})
      })
      
    }
  }

 

  updateUser(){
    if( this.signupForm.valid&&this.user!=null){
      if(this.signupForm.value.role=="admin"){
        this.user.role=this.signupForm.value.role
      }
      if(this.signupForm.value.role=="user"){
        this.signupForm.value.role=""
      }
      this.store.dispatch(updateUser({user:this.signupForm}))
     /*  this.service.updateUser(this.signupForm.value,this.signupForm.value.id).subscribe((user)=>{
        console.log(user)
      }); */
      this.dialog.close();
    }
  }

}
