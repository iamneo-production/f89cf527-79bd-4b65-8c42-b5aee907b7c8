import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  url="https://8080-dadadbcdabbdffbedeadcfdbdaabaca.examlyiopb.examly.io/orders";

  constructor(private http:HttpClient) { }
  
  getCustomerOrders(id:number)
  {
    return this.http.get(this.url+"?userId="+id);
  }
}
