import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { MovieDetailedComponent } from './movie-detailed/movie-detailed.component';

const routes: Routes = [
  {
    path: 'browse',
    component: BrowseMoviesComponent, // not standalone
  },
  {
    path: 'view/:movieId',
    component: MovieDetailedComponent, // not standalone
  },
  {
    path: '**',
    redirectTo: 'browse'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMovieRoutingModule {}
