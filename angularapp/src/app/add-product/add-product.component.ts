import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProductService } from '../services/Product/add-product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  products:any;
  constructor(private addproductService:AddProductService,private snackBar:MatSnackBar) {
    this.getProducts();
   }

   addProduct(data:any) {
    this.addproductService.createProduct(data).subscribe((result:any)=>{
      console.log(result)
      this.snackBar.open('Product successfully added!', '✅', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration:1500
      });

    })
  }

  getProducts(){
    this.addproductService.getAllProducts().subscribe((data:any)=>{
      console.log(data)
      this.products=data;
    })
  }

  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[A-Z a-z]+$')]),
    description: new FormControl('',[Validators.required, Validators.pattern('[A-Z a-z]+$')]),
    price: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    imageURL: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(5)])
  })

  get name(){
    return this.addProductForm.get('name');
  }

  get description(){
    return this.addProductForm.get('description');
  }

  get imageURL(){
    return this.addProductForm.get('imageURL');
  }

  get price(){
    return this.addProductForm.get('price');
  }

  get quantity(){
    return this.addProductForm.get('quantity');
  }
  

}