import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-review-pop-up',
  templateUrl: './review-pop-up.component.html',
  styleUrls: ['./review-pop-up.component.scss'],
  imports:[
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ReviewPopUpComponent implements OnInit {
  @Output() onClick: EventEmitter<String> = new EventEmitter<String>();

  result: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<ReviewPopUpComponent>
  ) {}

  ngOnInit(): void {
    this.result = this.data;
  }

  zatvori(komentar: string) {
    this.Ref.close(komentar);
  }
}
