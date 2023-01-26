import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ViewCartService {

  url = "https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/carts"

  constructor(private http:HttpClient) { 

  }

  getCart(){
    return this.http.get(this.url+"/?userId=3")
  }
}
