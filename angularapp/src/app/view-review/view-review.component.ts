import { Component, OnInit } from '@angular/core';
import { ViewReviewService } from '../services/view-review.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {

  reviews:any;

  constructor(private ViewReviewsDataService: ViewReviewService) { } 

  ngOnInit(): void {

    this.getViewReviews();
  }

  getViewReviews()
  {

    this.ViewReviewsDataService.getViewReviews().subscribe((data: any)=>{
      console.log(data);
      this.reviews = data;
  
    }); 

  }

}

 




