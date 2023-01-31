import { Injectable } from '@angular/core';
import { ProductreviewService } from '../services/productreview.service';


@Injectable()
export class Productreview {

    products:any;
    product:any={};
    allreviews: any=[];

    constructor(public productData: ProductreviewService){}

    public getReviews(productId){
        const searchValue=productId;
        this.productData.getData().subscribe((data)=>{
          this.products=data;
          this.products.map((product, index)=>{
            if (product.productId===searchValue){
              this.product=product;
            }
          });

          this.products.reviews.map((review, index)=>{
            this.allreviews.push(review);
          });
        });
    }
    
  }

