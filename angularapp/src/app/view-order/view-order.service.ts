import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewOrderService {

  url="https://8080-dadadbcdabbdffbedeadcfdbdaabaca.examlyiopb.examly.io/orders";

  constructor(private http:HttpClient) { }

  getOrders()
  {
    return this.http.get(this.url); 
  }

  updateOrder(putOrder: any) {
    return this.http.put(this.url+"/"+putOrder.id, putOrder);
  }
}
