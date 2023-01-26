import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteOrderService {

  url="http://localhost:3000/orders";

  constructor(private http:HttpClient) { }

  deleteOrders(id:number)
  {
      return this.http.delete(this.url+"/"+id);
  }
}
