import { Component, Input, OnInit } from '@angular/core';
import { DeleteProductService } from '../services/Product/delete-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  @Input() product:any;

  constructor(private deleteproductService:DeleteProductService) {
  }

 

  ngOnInit(): void{}

  deleteProduct() {
    
    if (confirm("Confirm Product Delete")) {
      this.deleteproductService.deleteProduct(this.product).subscribe(
        (data:any) => {
        
        location.reload();
      });
    }
  }
}

 


