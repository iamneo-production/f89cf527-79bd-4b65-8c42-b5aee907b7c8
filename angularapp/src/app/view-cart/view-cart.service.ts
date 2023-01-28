import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ViewCartService {

  url = "https://8080-cafcfccaceabeffbedeadcfdbdaabaca.examlyiopb.examly.io/carts"

  constructor(private http:HttpClient) { 

  }

  getCart(){
    return this.http.get(this.url)
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    return this.http.get(this.url+"/?userId="+user.id)
  }
}
