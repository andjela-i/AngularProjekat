import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigacijaComponent } from './components/navigacija/navigacija.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowseMoviesComponent } from './components/browse-movies/browse-movies.component'
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from 'src/store/movies.reducer';
import { AppState } from './app.state';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { MoviesEffects } from 'src/store/movies.effects';
import { MovieThumbComponent } from './components/movie-thumb/movie-thumb.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule} from '@angular/material/dialog';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    BrowseMoviesComponent,
    MovieThumbComponent,
    MovieDetailedComponent,
    PopUpComponent,
    SignUpComponent,
    LogInComponent
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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
