import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewOrderService {

  url="https://8080-afeccbdebfffbedeadcfdbdaabaca.examlyiopb.examly.io/orders";

  constructor(private http:HttpClient) { }

  getOrders()
  {
    return this.http.get(this.url); 
  }
}
