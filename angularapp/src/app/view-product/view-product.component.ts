import { Component, OnInit } from '@angular/core';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent  {
  products:any;
  constructor(private viewproductService: ViewProductService) {
    viewproductService.products().subscribe((data:any)=>
    {
      this.products=data;
    })
   }

  

}
