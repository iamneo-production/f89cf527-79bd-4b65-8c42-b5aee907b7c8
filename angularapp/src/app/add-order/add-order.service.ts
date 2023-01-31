import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  url="https://8080-afeccbdebfffbedeadcfdbdaabaca.examlyiopb.examly.io/orders";

  constructor(private http:HttpClient) { }
  
 
  addOrder(data:any)
  {
      return this.http.post(this.url,data);
  }
}
