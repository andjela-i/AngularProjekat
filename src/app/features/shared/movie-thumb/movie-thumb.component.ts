import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../../models/movie';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-movie-thumb',
  templateUrl: './movie-thumb.component.html',
  styleUrls: ['./movie-thumb.component.scss'],
  imports:[
    CommonModule,
    MatCardModule,
    RouterModule
  ]
})
export class MovieThumbComponent implements OnInit {
  @Input()
  movie: Movie | null = null;
  // TODO: reserved event not be be used like this
  @Output() onClick: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    if (this.movie) this.onClick.emit(this.movie);
  }
}
