import { Component, OnInit } from '@angular/core';
import { DeleteProductService } from '../services/Product/delete-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  products:any;

  constructor(private deleteproductService:DeleteProductService) {
    this.getProducts();
   }

   getProducts(){
    this.deleteproductService.products().subscribe((data:any)=>{
      console.log(data)
      this.products=data;
    })
  }

  ngOnInit(): void{}

  deleteProduct(data: any) {
    console.log(data)
    if (confirm("Confirm Product Delete")) {
      this.deleteproductService.deleteProduct(data).subscribe(
        (data:any) => {
        // console.log(data)
        this.getProducts()
      });
    }
  }
}

 


