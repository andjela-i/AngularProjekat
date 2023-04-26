import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addUser } from 'src/store/movies.action';
import { AngularprojekatService } from 'src/app/services/angularprojekat.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signupForm!: FormGroup<any>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private service: AngularprojekatService,
    private router: Router
  ) {}

  posaljiVrednosti(email: string, sifra: string) {
    console.log(email, sifra);
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signUp() {
    this.store.dispatch(addUser(this.signupForm.value));
    this.signupForm.reset();
    this.router.navigate(['/log-in']);
  }
}
