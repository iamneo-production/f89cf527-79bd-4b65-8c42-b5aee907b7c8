import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductReviewService } from '../services/product-review.service';


@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {


  @Input() product: any = {};
  reviews: any[] = [];
  rating: any;

  constructor(private productReviewService: ProductReviewService) { }

  ngOnInit(): void {
    this.getRatings()
  }

  getRatings() {
    this.productReviewService.getReviews(this.product.id).subscribe(
      (next: any) => {
        console.log(next);
        this.reviews = next
      }
    )
  }



}
