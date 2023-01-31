import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProductService } from '../services/Product/edit-product.service';


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
  constructor(
    private editproductService: EditProductService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private router:Router
    ) 
    {

    }

    ngOnInit(){
      this.setProduct()
    }

    setProduct() {
          this.editForm.get('id')!.setValue(this.data.id);
          this.editForm.get('name')!.setValue(this.data.name);
          this.editForm.get('brand')!.setValue(this.data.brand);
          this.editForm.get('price')!.setValue(this.data.price);
          this.editForm.get('description')!.setValue(this.data.description);
          this.editForm.get('imageURL')!.setValue(this.data.imageURL);
          this.editForm.get('quantity')!.setValue(this.data.quantity);
    }

    // ---------
    get name(){
      return this.editForm.get('name');
    }
    get brand(){
      return this.editForm.get('brand');
    }
  
    get description(){
      return this.editForm.get('description');
    }
  
    get imageURL(){
      return this.editForm.get('imageURL');
    }
  
    get price(){
      return this.editForm.get('price');
    }
  
    get quantity(){
      return this.editForm.get('quantity');
    }
// -------------
    editProduct(data:any){
      console.log(data.value);
      if (confirm("Are you sure you want to submit changes?")) {
        if (this.editForm.valid) {
          this.editproductService.editProduct(data.value).subscribe(
            (data:any) => {
              console.log(data);
              alert("Product successfully updated")
              location.reload()
            });
        } else {
          alert("Invalid form, product edit failed");
        }
      }
    }

    }
