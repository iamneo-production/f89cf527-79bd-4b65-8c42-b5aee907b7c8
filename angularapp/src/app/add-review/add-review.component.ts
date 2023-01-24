import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddReviewService } from '../services/add-review.service';



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {

  @Input() product:any = {};
  @Input() user:any = {};

  constructor(private addReviewService:AddReviewService){}

  ngOnInit():void
  {}

  rating:number = 0;
  review:string = '';

  productRating = {
    userid : this.user.id,
    productId: this.product.id,
    rating : this.rating,
    review: this.review
  }

  
  
  currentRate = 0;

  addRating(){
    alert(this.rating +" "+ this.review)

    this.addReviewService.addReviews(this.productRating).subscribe(
      (next:any)=> {
        console.log(next);
        
      }
    )
    
  }
}


