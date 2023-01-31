import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddReviewComponent } from '../add-review/add-review.component';
import { Productreview } from '../models/productreview.model';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent{

  product:any;
  
  constructor(private router:Router, activatedRoute:ActivatedRoute, private dialog:MatDialog ) {

    this.product = activatedRoute.snapshot.queryParams;
    console.log(this.product);
  }


    openDialog(): void {
      const dialogRef = this.dialog.open(AddReviewComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }

    
}