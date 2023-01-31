import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProductService } from '../services/Product/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  products:any;
  constructor(private addproductService:AddProductService) {
    this.getProducts();
   }

   addProduct(data:any) {
    this.addproductService.createProduct(data).subscribe((result:any)=>{
      console.log(result)
      alert("New Product Added")
    })
  }

  getProducts(){
    this.addproductService.getAllProducts().subscribe((data:any)=>{
      console.log(data)
      this.products=data;
    })
  }

  addProductForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    imageURL: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required]),
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