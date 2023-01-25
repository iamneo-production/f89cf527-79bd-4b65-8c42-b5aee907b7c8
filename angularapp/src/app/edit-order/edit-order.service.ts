import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditOrderService {

  url="http://localhost:3000/orders";

  constructor(private http:HttpClient) { }
  editOrders(data:any)
  {
      return this.http.put(this.url+"/"+data.id,data);
  }
}
