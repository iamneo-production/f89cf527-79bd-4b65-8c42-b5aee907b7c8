import { Component, OnInit } from '@angular/core';
import { Productreview } from '../models/productreview.model';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent{
  Id: any;
  productId:any;
  products:any;
  
  constructor(public productModel: Productreview, public viewproductService: ViewProductService) {
    viewproductService.products().subscribe((data:any)=>
    {
      this.products=data;
  
    })
  }
  searchProduct(id){
    this.productId=this.Id;
    this.productModel.allreviews=[];
    this.productModel.getReviews(this.Id);
  }
    
}