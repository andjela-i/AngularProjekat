import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../app.state';
import { selectMovie } from 'src/store/movies.selector';
import { Movie } from '../../../../models/movie';
import { MovieDetailedComponent } from '../../pages/movie-detailed/movie-detailed.component';
import { Store } from '@ngrx/store';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  imports:[

  ]
})
export class PopUpComponent implements OnInit {
  URL: string = '';
  videoUrl: SafeUrl = {};

  constructor(private store: Store<AppState>, private domSan: DomSanitizer) {
    this.store.select(selectMovie).subscribe((film) => {
      this.videoUrl = this.domSan.bypassSecurityTrustResourceUrl(film.link);
      console.log(this.videoUrl);
    });
  }

  ngOnInit(): void {}
}
