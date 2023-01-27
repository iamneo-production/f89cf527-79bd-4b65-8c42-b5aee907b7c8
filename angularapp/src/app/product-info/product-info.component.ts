import { Component, OnInit } from '@angular/core';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent{

  products:any;
  singleproduct:any={};
  Id:any;
  productId:any=0;

  constructor(private viewproductService: ViewProductService) {
    viewproductService.products().subscribe((data:any)=>
    {
      this.products=data;
    })
   }




  //  Simiso view
   searchProduct(id){
     this.productId=this.Id;
     this.getReviews(this.Id);
   }






   public getReviews(id){
     const searchValue=id;
     this.viewproductService.products().subscribe((data)=>{
       this.products=data;
       this.products.map((product, index)=>{
         if (product.id===searchValue){
           this.products=product;
         }
       })
     })
   }



}
