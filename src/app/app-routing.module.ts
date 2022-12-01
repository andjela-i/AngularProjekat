import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { MovieDetailedComponent } from './movie-detailed/movie-detailed.component';

const routes: Routes = [
  {path:'browse-movies', component:BrowseMoviesComponent},
  {path:'movie-detailed',component:MovieDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
