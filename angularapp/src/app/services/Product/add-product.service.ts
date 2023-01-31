import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  url="https://8080-ebffcadbcbffbedeadcfdbdaabaca.examlyiopb.examly.io/products";

  constructor(private http:HttpClient) { }

   // @Get all products
   getAllProducts(){
   return this.http.get(this.url);

  }

  // @creating the products

  createProduct(productBody:any){
    console.log(productBody);
    
    return this.http.post(this.url, productBody);

  }
}
