import { Component, OnInit } from '@angular/core';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent{

  products:any;
  constructor(private viewproductService: ViewProductService) {
    viewproductService.products().subscribe((data:any)=>
    {
      this.products=data;
    })
   }



}
