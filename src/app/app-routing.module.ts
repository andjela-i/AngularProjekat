import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';

const routes: Routes = [
  {path:'browse-movies', component:BrowseMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
