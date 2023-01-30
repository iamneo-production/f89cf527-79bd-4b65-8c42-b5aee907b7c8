import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  
  url = "https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/products";

  

  constructor(private http:HttpClient) { }

  getProduct()
  {

    return this.http.get(this.url);
  }

  editProduct(data: any) {
    return this.http.put(this.url + "/" + data.id, data)
  }
}
