import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteOrderService {

  url="https://8080-afeccbdebfffbedeadcfdbdaabaca.examlyiopb.examly.io/orders";

  constructor(private http:HttpClient) { }

  deleteOrder(id:number)
  {
      return this.http.delete(this.url+"/"+id);
  }
}
