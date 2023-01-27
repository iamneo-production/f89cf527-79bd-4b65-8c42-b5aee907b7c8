import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  url="http://localhost:3000/orders";

  constructor(private http:HttpClient) { }
  
  CustomerOrder()
  {
    return this.http.get(this.url); 
  }
}
