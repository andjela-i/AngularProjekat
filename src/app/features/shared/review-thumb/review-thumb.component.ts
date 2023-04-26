import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieReview } from '../../../models/review';
import { User } from '../../../models/user';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { selectProfile } from 'src/store/movies.selector';
import { AngularprojekatService } from '../../../services/angularprojekat.service';
import {
  deleteReview,
  updateUser,
  updateUsersReviews,
} from 'src/store/movies.action';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-review-thumb',
  templateUrl: './review-thumb.component.html',
  styleUrls: ['./review-thumb.component.scss'],
  imports: [MatButtonModule, MatCardModule, CommonModule],
})
export class ReviewThumbComponent implements OnInit {
  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  user: User | null = null;

  reviewUser: User | null = null;

  @Input()
  review: MovieReview | null = null;

  constructor(
    private store: Store<AppState>,
    private service: AngularprojekatService
  ) {}

  ngOnInit(): void {
    this.store.select(selectProfile).subscribe((user) => (this.user = user));
    if (this.review != null) {
      this.service
        .getUserByUnsername(this.review.username)
        .subscribe((user) => {
          this.reviewUser = user[0];
          console.log(this.reviewUser);
        });
    }
  }

  userIsAdmin() {
    if (this.user != null) {
      if (this.user.role == 'admin') {
        return true;
      }
    }
    return false;
  }

  deleteReview() {
    if (this.review != null && this.reviewUser != null) {
      this.store.dispatch(deleteReview({ review: this.review }));
      this.store.dispatch(
        updateUsersReviews({ user: this.reviewUser, review: this.review })
      );
    }
    console.log('clicked', this.review);

    this.buttonClicked.emit('klik');
  }
}
