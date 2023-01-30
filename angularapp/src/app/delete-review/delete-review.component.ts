import { Component, OnInit, Input } from '@angular/core';
import { DeleteReviewService } from '../services/delete-review.service';

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

