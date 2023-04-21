import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieThumbComponent } from '../shared/movie-thumb/movie-thumb.component';
import { ReviewThumbComponent } from '../shared/review-thumb/review-thumb.component';
import { UpdatePopUpComponent } from 'src/app/features/user/update-pop-up/update-pop-up.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ProfileComponent,
    SignUpComponent,
    LogInComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MovieThumbComponent,
    ReviewThumbComponent,
    UpdatePopUpComponent,
    TranslateModule.forChild(),
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [SignUpComponent, ProfileComponent, LogInComponent,UserListComponent],
})
export class UserModule {}
