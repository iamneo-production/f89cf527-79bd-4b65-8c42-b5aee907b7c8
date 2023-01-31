import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddReviewService } from '../services/add-review.service';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {

  @Input() product:any = {};
  @Input() user:any = {};

  constructor(private addReviewService:AddReviewService){}
  

  ngOnInit():void{
    
  }

  rating:number = 0;
  review:string = '';
  date=Date();

  currentRate = 0;

  
  addRating(){
    alert(this.rating +" "+ this.review)

    let productRating = {
      userid : this.user.id,
      productId: this.product.id,
      rating : this.rating,
      review: this.review
    }

    this.addReviewService.addReviews(productRating).subscribe(
      (next:any)=> {
        console.log(next);
      }
    )
    
  }
}



