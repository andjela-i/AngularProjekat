import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class AngularprojekatService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Movie[]>(environment.api+"/movies");
  }

  addUser(signupForm:FormGroup){
    this.httpClient.post<any>(environment.api+"/users",signupForm).subscribe((response) => console.log(response),
    (error) => console.log(error))
  }
}
