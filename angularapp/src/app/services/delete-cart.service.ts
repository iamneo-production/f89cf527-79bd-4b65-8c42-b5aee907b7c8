import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteCartService {
  
  url = "https://8080-dadadbcdabbdffbedeadcfdbdaabaca.examlyiopb.examly.io/carts";

  constructor(private http:HttpClient) { }
  
  deleteCart(data:any)
  {
    return this.http.delete(this.url+"/"+data.id);
  }
}
