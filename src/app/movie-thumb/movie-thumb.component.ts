import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-thumb',
  templateUrl: './movie-thumb.component.html',
  styleUrls: ['./movie-thumb.component.scss']
})
export class MovieThumbComponent implements OnInit {

  @Input()
  movie: Movie | null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
