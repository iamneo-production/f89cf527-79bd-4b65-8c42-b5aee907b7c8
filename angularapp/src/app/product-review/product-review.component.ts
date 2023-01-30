import { Component, Input, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductReviewService } from '../services/product-review.service';


@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {


  @Input() product:any;
  reviews:any[]=[];

  constructor(private productReviewService:ProductReviewService) { }

  ngOnInit(): void {

  }

  getRatings()
  {
    this.productReviewService.getReviews(this.product.id).subscribe(
      (next:any)=>{
        console.log(next);
        
      }
    )
    }





  // rating:number = 0;
  // review:string = '';
  // date=Date();

  // currentRate = 0;

  // productRating = {
  //   userid : this.user.id,
  //   productId: this.product.id,
  //   rating : this.rating,
  //   review: this.review
  // }

  
  // addRating(){
  //   alert(this.rating +" "+ this.review)

  //   this.addReviewService.addReviews(this.productRating).subscribe(
  //     (next:any)=> {
  //       console.log(next);
        
  //     }
  //   )
    
  }
