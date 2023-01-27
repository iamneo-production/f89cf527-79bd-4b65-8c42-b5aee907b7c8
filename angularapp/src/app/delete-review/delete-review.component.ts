import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-review',
  templateUrl: './delete-review.component.html',
  styleUrls: ['./delete-review.component.css']
})
export class DeleteReviewComponent implements OnInit {

@Input() review:any;

  constructor(private deleteReviewService: DeleteReviewService) { }

  ngOnInit(): void {
  }

  deleteReviews()
  {

    this.deleteReviewService.deleteReviews(this.review).subscribe((result:any)=>
    {

      console.log(result);

    });
  }

}

