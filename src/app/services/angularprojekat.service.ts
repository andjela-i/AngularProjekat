import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
