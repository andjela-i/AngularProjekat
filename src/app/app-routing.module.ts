import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './features/movie/browse-movies/browse-movies.component';
import { MovieDetailedComponent } from './features/movie/movie-detailed/movie-detailed.component';
import { SignUpComponent } from './features/user/sign-up/sign-up.component';
import { LogInComponent } from './features/user/log-in/log-in.component';
import { ProfileComponent } from './features/user/profile/profile.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

const routes: Routes = [
  {path:'browse-movies', component:BrowseMoviesComponent},
  {path:'movie-detailed',component:MovieDetailedComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'log-in',component:LogInComponent},
  {path:'profile',component:ProfileComponent},
  {path:'users',component:UserListComponent},
  {
    path: 'moview',
    loadChildren: (): any =>
      import('./features/movie/movie.module').then((m): any => m.AppAdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
