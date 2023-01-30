import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProductService } from '../services/edit-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  product:any;
  productId: any;

  editForm= new FormGroup(
    {
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imageURL: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required])
    }
  );
  constructor(private editproductService: EditProductService,
    private activatedRoute: ActivatedRoute,
    private router:Router) 
    {
      activatedRoute.params.subscribe(
        ()=>{
          this.productId=this.activatedRoute.snapshot.paramMap.get('id');
          console.log(this.productId);

          this.getProduct();
        }
      )

    }

    getProduct() {
      this.editproductService.getProducts().subscribe(
        (data: any) => {
  
          this.product = data.find((resproduct: any) => resproduct.id == this.productId);
  
          this.editForm.get('id')!.setValue(this.product.id);
          this.editForm.get('name')!.setValue(this.product.name);
          this.editForm.get('brand')!.setValue(this.product.brand);
          this.editForm.get('price')!.setValue(this.product.price);
          this.editForm.get('description')!.setValue(this.product.description);
          this.editForm.get('imageURL')!.setValue(this.product.imageURL);
          this.editForm.get('quantity')!.setValue(this.product.quantity);

        }
      );
    }

    editProduct(data:any){
      console.log(data.value);
      if (confirm("Are you sure you want to submit changes?")) {
        if (this.editForm.valid) {
          this.editproductService.editProduct(data.value).subscribe(
            (data: any) => {
              console.log(data);
              alert("Product successfully updated")
              this.getProduct();
              this.router.navigate(['products'])
            });
        } else {
          alert("Invalid form, product edit failed");
        }
      }
    }

    }
