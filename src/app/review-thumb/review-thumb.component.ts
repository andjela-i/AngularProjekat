import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-thumb',
  templateUrl: './review-thumb.component.html',
  styleUrls: ['./review-thumb.component.scss']
})
export class ReviewThumbComponent implements OnInit{


  @Input()
  review: Review | null=null;

  ngOnInit(): void {
    
  }

}
