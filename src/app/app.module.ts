import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from 'src/store/movies.reducer';
import { AppState } from './app.state';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { MoviesEffects } from 'src/store/movies.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { usersReducer } from 'src/store/users.reducer';
import { movieReviewsReducer } from 'src/store/movieReviews.reducer';
import { TranslateModule } from '@ngx-translate/core';
import { APP_TRANSLATION_LOADER_PROVIDER } from './services/translation-loader.service';
import { APP_TRANSLATION_INITIALIZER } from './services/translation-initializer.service';
import { AppLayoutToolbarComponent } from './features/shared/layout-toolbar/layout-toolbar.component';
import { MovieModuleModule } from './features/movie/movie-module.module';
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [AppComponent],
  providers: [APP_TRANSLATION_INITIALIZER],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({
      movies: moviesReducer,
      users: usersReducer,
      movieReviews: movieReviewsReducer,
    }),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      // could read from localstorage
      // could use appinitializer to setup translation language
      defaultLanguage: 'en',
      loader: APP_TRANSLATION_LOADER_PROVIDER,
      extend: true,
      isolate: false,
    }),
    AppLayoutToolbarComponent,
    MovieModuleModule,
    UserModule,
  ],
})
export class AppModule {}
