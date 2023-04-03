import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-review-pop-up',
  templateUrl: './review-pop-up.component.html',
  styleUrls: ['./review-pop-up.component.scss']
})
export class ReviewPopUpComponent implements OnInit{


@Output() onClick: EventEmitter<String>= new EventEmitter<String>();

result:any;
constructor(@Inject(MAT_DIALOG_DATA) public data:any, private Ref:MatDialogRef<ReviewPopUpComponent>){

}


ngOnInit(): void {
this.result=this.data;
    
}

zatvori(komentar:string){
  this.Ref.close(komentar);
}


}
