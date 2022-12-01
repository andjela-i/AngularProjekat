import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component'
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from 'src/store/movies.reducer';
import { AppState } from './app.state';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { MoviesEffects } from 'src/store/movies.effects';
import { MovieThumbComponent } from './movie-thumb/movie-thumb.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MovieDetailedComponent } from './movie-detailed/movie-detailed.component';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    BrowseMoviesComponent,
    MovieThumbComponent,
    MovieDetailedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({movies:moviesReducer}),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
