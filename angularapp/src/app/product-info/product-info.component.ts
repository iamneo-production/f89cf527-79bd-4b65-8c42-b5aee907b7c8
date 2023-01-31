import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productreview } from '../models/productreview.model';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent{

  product:any;
  
  constructor(private router:Router, activatedRoute:ActivatedRoute ) {

    this.product = activatedRoute.snapshot.queryParams;
    console.log(this.product);
    
    
  }

    
}