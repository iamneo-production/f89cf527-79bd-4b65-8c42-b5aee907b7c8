import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  url="http://localhost:3000/orders";

  constructor(private http:HttpClient) { }
  
 
  saveOrders(data:any)
  {
      return this.http.post(this.url,data);
  }
}
