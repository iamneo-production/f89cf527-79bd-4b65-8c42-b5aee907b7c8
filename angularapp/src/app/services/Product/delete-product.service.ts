import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {
  url="https://8080-dadadbcdabbdffbedeadcfdbdaabaca.examlyiopb.examly.io/products";

  constructor(private http:HttpClient) { }

  products(){
    return this.http.get(this.url)
  }
  
  deleteProduct(data:any){
    return this.http.delete(this.url+"/"+data.id)
  };
  
  

}
