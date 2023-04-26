import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseMoviesComponent } from './pages/browse-movies/browse-movies.component';
import { MovieDetailedComponent } from './pages/movie-detailed/movie-detailed.component';
import { MovieThumbComponent } from '../shared/movie-thumb/movie-thumb.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ReviewPopUpComponent } from './components/review-pop-up/review-pop-up.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReviewThumbComponent } from '../shared/review-thumb/review-thumb.component';
import { AppMovieRoutingModule } from './movie-routing.module';
import { AppMovieService } from './movie.service';

@NgModule({
  providers: [AppMovieService],
  declarations: [BrowseMoviesComponent, MovieDetailedComponent],
  imports: [
    CommonModule,
    AppMovieRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReviewThumbComponent,
    MovieThumbComponent,
    ReviewPopUpComponent,
    PopUpComponent,
    TranslateModule.forChild(),
  ],
  exports: [
    MovieDetailedComponent
  ],
})
export class AppMovieModule {}
