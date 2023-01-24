import { Component, OnInit } from '@angular/core';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products:any[]=[];

  constructor(private productService:ViewProductService){

  }

  ngOnInit(){
    this.getProducts();
  }

  // addToCart(product:any){
  //   this.productService.addProductToCart(product).subscribe(
  //     (next:any) => {
  //       console.log(next);
        
  //     }
  //   );
  // }

  getProducts(){
    this.productService.products().subscribe(
      (next:any) => {
        console.log(next);
        this.products = next;
      }
    )
  }

}
