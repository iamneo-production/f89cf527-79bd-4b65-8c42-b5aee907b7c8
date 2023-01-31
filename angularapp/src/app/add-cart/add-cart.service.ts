import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  url = "https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/carts"

  constructor(private http:HttpClient) { }

  addToCart(data:any){
    return this.http.post(this.url, data)
  }
 
}
