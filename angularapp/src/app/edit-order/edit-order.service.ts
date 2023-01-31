import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditOrderService {

  url="https://8080-dadadbcdabbdffbedeadcfdbdaabaca.examlyiopb.examly.io/orders";

  constructor(private http:HttpClient) { }
  editOrder(data:any)
  {
      return this.http.put(this.url+"/"+data.id,data);
  }
  getOrder()
  {
    return this.http.get(this.url); 
  }
}
