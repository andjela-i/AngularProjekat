import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './features/movie/pages/browse-movies/browse-movies.component';
import { MovieDetailedComponent } from './features/movie/pages/movie-detailed/movie-detailed.component';
import { SignUpComponent } from './features/user/pages/sign-up/sign-up.component';
import { LogInComponent } from './features/user/pages/log-in/log-in.component';
import { ProfileComponent } from './features/user/pages/profile/profile.component';
import { UserListComponent } from './features/user/pages/user-list/user-list.component';

const routes: Routes = [
  {path:'sign-up',component:SignUpComponent},
  {path:'log-in',component:LogInComponent},
  {path:'profile',component:ProfileComponent},
  {path:'users',component:UserListComponent},
  {
    path: 'movies',
    loadChildren: (): any =>
      import('./features/movie/movie.module').then((m): any => m.AppMovieModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
