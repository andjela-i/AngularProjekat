import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-movie-thumb',
  templateUrl: './movie-thumb.component.html',
  styleUrls: ['./movie-thumb.component.scss'],
  imports: [CommonModule, MatCardModule, RouterModule],
})
export class MovieThumbComponent implements OnInit {
  @Input()
  movie: Movie | null = null;

  constructor() {}

  ngOnInit(): void {}

  clicked() {}
}
