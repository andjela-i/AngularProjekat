import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './components/browse-movies/browse-movies.component';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'browse-movies', component:BrowseMoviesComponent},
  {path:'movie-detailed',component:MovieDetailedComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'log-in',component:LogInComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
