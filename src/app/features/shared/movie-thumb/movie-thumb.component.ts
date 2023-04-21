import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../../models/movie';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-movie-thumb',
  templateUrl: './movie-thumb.component.html',
  styleUrls: ['./movie-thumb.component.scss'],
  imports:[
    CommonModule,
    MatCardModule
  ]
})
export class MovieThumbComponent implements OnInit {
  @Input()
  movie: Movie | null = null;
  @Output() onClick: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    if (this.movie) this.onClick.emit(this.movie);
  }
}
