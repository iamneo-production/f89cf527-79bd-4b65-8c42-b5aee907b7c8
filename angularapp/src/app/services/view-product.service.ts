import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewProductService {
  url="https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/products";

  constructor(private http:HttpClient) { }
  products()
  {
    return this.http.get(this.url);
  }
}
